import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 页面滚到顶部
export default function useScrollTop() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname]) // 监听路径改变
}