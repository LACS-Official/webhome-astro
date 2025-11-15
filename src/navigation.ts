import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '首页',
      href: getPermalink('/'),
    },
    {
      text: '项目展示',
      href: getPermalink('/#projects'),
    },
    {
      text: '关于我们',
      href: getPermalink('/#about'),
    },
    {
      text: '联系我们',
      href: getPermalink('/contact'),
    },
    {
      text: '远程刷机',
      href: getPermalink('/ycsj'),
    },
    {
      text: '捐赠我们',
      href: getPermalink('/donate'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [],
  secondaryLinks: [],
  socialLinks: [],
  footNote: `
    <div class="flex flex-col lg:flex-row items-center justify-between gap-6 py-4">
      <!-- 版权信息 -->
      <div class="text-center lg:text-left">
        <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
          © 2020-2025
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            领创工作室
          </span>
          (Lead And Create Studio)
        </span>
        <div class="text-xs text-gray-500 dark:text-gray-400 mt-1">
          保留所有权利
        </div>
      </div>

      <!-- 备案信息 -->
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-6 text-center lg:text-right">
        <!-- ICP备案 -->
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300 hover:shadow-md"
          aria-label="查看ICP备案信息"
        >
          <div class="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300">
            <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <span class="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            辽ICP备2025056705号
          </span>
        </a>

        <!-- 公安网备 -->
        <a
          href="https://beian.mps.gov.cn/#/query/webSearch?code=21122402000208"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-green-50 dark:hover:bg-green-900/30 transition-all duration-300 hover:shadow-md"
          aria-label="查看公安网备案信息"
        >
          <div class="flex items-center justify-center w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/50 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 transition-colors duration-300">
            <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <span class="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
            辽公网安备21122402000208号
          </span>
        </a>
        <!-- 网站地图 -->
        <a
          href="https://www.lacs.cc/sitemap-0.xml"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-yellow-50 dark:hover:bg-yellow-900/30 transition-all duration-300 hover:shadow-md"
        >
          <span class="text-xs font-medium text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
            sitemap
          </span>
        </a>
      </div>
    </div>
  `,
};
