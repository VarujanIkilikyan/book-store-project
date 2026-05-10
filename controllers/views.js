export default {
    viewRender(ejsName) {
        return (req, res, next) => {
            res.render(ejsName, (err, html) => {
                if (err) {
                    return next(err); // ← ошибка из EJS (файл не найден, синтаксис и т.д.)
                }
                // Express сам отправит html — можно ничего не делать
            });
        };
    }
};