const formatDate = (date) => {
    const [year, month, day] = date.split('/');
    return new Date(+year + 1911, +month - 1, +day);
};

export const pendingList = (apiData) => {
    if (!apiData) return;
    let filteredList = apiData.orders.filter(
        (item) => item.status.code === 1 || item.status.code === 2,
    );

    filteredList.sort((a, b) => formatDate(b.date) - formatDate(a.date));
    return filteredList;
};

export const resolvedList = (apiData) => {
    if (!apiData) return;
    let filteredList = apiData.orders.filter(
        (item) => item.status.code === 3 || item.status.code === 4,
    );

    return filteredList;
};
