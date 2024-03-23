//登出時 清除紀錄後重新載入一次頁面
export const signOut = () => {
    localStorage.clear();
    location.reload();
}
