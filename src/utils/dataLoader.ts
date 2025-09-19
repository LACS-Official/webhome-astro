import { promises as fs } from 'fs';
import path from 'path';

// 获取项目数据
export async function getProjectsData() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'projects_list.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('读取项目数据失败:', error);
    return [];
  }
}

// 获取站点数据
export async function getSitesData() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'sites_list.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('读取站点数据失败:', error);
    return [];
  }
}