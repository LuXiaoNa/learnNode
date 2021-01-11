const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const dbUrl = 'mongodb://127.0.0.1:27017';

MongoClient.connect(dbUrl, function(err, client) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('连接成功');
    const testDb = client.db('students');
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
    testDb.collection('students').remove({ name: '李3' }, function(err, result) {
        if (err) {
            console.log(err)
            return
        }
        console.log(result)
    })
    client.close();
})