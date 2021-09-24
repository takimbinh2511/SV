const logFeature = (req, res, next) => {
    console.log("Đây là danh sách học sinh");
    next(); //chạy xuống middleware tiếp theo
};

module.exports = {
    logFeature,
}