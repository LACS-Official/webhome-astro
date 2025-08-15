import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  try {
    // 从真实 API 获取捐赠者数据
    const apiResponse = await fetch('https://api-g.lacs.cc/api/donors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!apiResponse.ok) {
      throw new Error(`API 请求失败: ${apiResponse.status} ${apiResponse.statusText}`);
    }

    const data = await apiResponse.json();

    // 直接返回从外部 API 获取的数据
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // 允许跨域请求
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  } catch (error) {
    console.error('API Error:', error);

    return new Response(JSON.stringify({
      success: false,
      error: 'Failed to fetch donors data',
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};

// 处理 OPTIONS 请求（CORS 预检）
export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
