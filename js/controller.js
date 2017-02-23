/**
 * Created by Administrator on 2016/10/15.
 */
angular.module('cartModel',[])
    .controller('cartController',['$scope',function($scope){
        $scope.cart=[{//可以选购的商品，购物架
            id:'001',
            name:'蜂蜜',
            price:24.00
        },{
            id:'002',
            name:'棉花糖',
            price:8.99
        },{
            id:'003',
            name:'棒棒糖',
            price:16.50
        },{
            id:'004',
            name:'黄豆酱',
            price:15.80
        },{
            id:'005',
            name:'护手霜',
            price:15.00
        },{
            id:'006',
            name:'山楂条',
            price:18.90
        }];
        $scope.boughtList=[
            //{
            //    id:'003',
            //    name:'棒棒糖',
            //    price:16.50
            //}，
            //{
            //    id:'006',
            //    name:'山楂条',
            //    price:18.90
            //}
        ];
        //购物车内所选的商品,起先是空的，点击购买后添加一条，点击删除删除一条，总价格变化，
        // 点击清空购物车则显示购物车为空
        $scope.totalCount=function(){//购物车的总数量
            var total=0;
            angular.forEach($scope.boughtList,function(item){
                total += item.count;
            });
            return total;
            };
        $scope.totalPrice=function(){//购物车的总价格
            var total=0;
            angular.forEach($scope.boughtList,function(item){
                total += item.price*item.count;
            });
            return total;
        };
        $scope.add=function(id){//增加商品的数量（其实就是数量框左边的加号）
        // 这是一个判断的过程，首先遍历一遍购物车看是否有该商品如果有，只需增加该商品的数量，此时为false
            //如果没有，此时flag仍为true，故将商品列表中的数据传到购物车中
            var flag=true;
            angular.forEach($scope.boughtList,function(item){
                if(id === item.id) {
                    ++item.count;
                    flag=false;
                }
            });
            if(flag) {
                angular.forEach($scope.cart,function(m) {
                    var ob={};
                    if (id === m.id) {
                        ob.id = m.id;
                        ob.name = m.name;
                        ob.count = 1;
                        ob.price = m.price;
                        $scope.boughtList.push(ob);
                    }
                });
                flag=true;
            }
            };

        $scope.remove=function(id)//删除商品，从购物框中彻底删除
        {
            var index=-1;
            angular.forEach($scope.boughtList,function(item,key){
                if(id == item.id)
                {
                    index=key;
                }
            });
            if(index!==-1)
            {
                var flag=confirm('确定删除该商品？');
                if(flag) {
                    $scope.boughtList.splice(index, 1);//splice（）方法从数组中删除项目
                }
            }
        };
        $scope.clearCart=function(){//清空购物车
            var flag=confirm('确定要清空购物车吗？');
            if(flag)
            {
                $scope.boughtList = [];
            }
        };
        $scope.jian=function(id){//商品数量的减少（其实就是数量框右边的减号）
            angular.forEach($scope.boughtList,function(item){
                if(id === item.id)
                {
                    --item.count;
                }
            })
        };


}]);
