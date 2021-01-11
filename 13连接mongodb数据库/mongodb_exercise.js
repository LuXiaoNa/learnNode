const { getTestDB, getTestDBSync, getStudents } = require('./mongo_database');

// getTestDB(function(db){
//     db.collection('students').dind({age:{$age:20}}).toArray(function(err,resule){
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(result)
//     })
// })

//使用async和await将异步操作编程同步模式
async function main() {
    try {
        const db = await getTestDBSync();
        const student_collection = db.collection('students');
        const students = await getStudents(student_collection, { age: { $gte: 20 } });
        console.log(students)
    } catch (err) {
        console.log(err)
    }
}
main();

// MongoClient.connect(dbUrl, function(err, client) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('连接成功');
//     const testDb = client.db('students');
//插入数据
// testDb.collection('students').insert({ name: 'li3', age: 22 }, function(err, result) {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log(result)
// })

//查找数据
// testDb.collection('students').find({ name: 'li3' }).toArray(function(err, result) {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
// })

//更新数据
// testDb.collection('students').update({ name: 'li3' }, { $set: { name: '李3' } }), (function(err, result) {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
// })

//删除数据
//     testDb.collection('students').remove({ name: '李3' }, function(err, result) {
//         if (err) {
//             console.log(err)
//             return
//         }
//         console.log(result)
//     })
//     client.close();
// })