// const asyncHandler = () => {}
// const asyncHandler = (fn) => { () => {}}
// const asyncHandler = (fn) => { async() => {}}


// ============ with promises ====================

const asyncHandler = (requestHandler) => {
    (err, req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((error) => next(error))
    }
}

export { asyncHandler }

// ================ with async await ==================

// const asyncHandler = (fn) => async (err, req, res, next) => {
//     try {
//         await fn(err, req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }
// export {asyncHandler} or export default asyncHandler