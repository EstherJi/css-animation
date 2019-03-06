
var main = {
    $couponSuccessBtn: $('#successBtn'),
    $couponErrorBtn: $('#errorBtn'),

    init: function(){
        var that = this;

        $('body').on('click', '#couponBtn', function(){
            $(this).closest('.coupon-mask').remove();
        })

        this.$couponSuccessBtn.on('click', function(){
            that.receiveSuccess(10);
        })

        this.$couponErrorBtn.on('click', function(){
            that.receiveError();
        })
    },

    receiveSuccess: function(amount){
        var html = '<div class="coupon-mask">' + 
                        '<div class="coupon-modal receive-success">' + 
                            '<i class="coupon-gold-icon"></i>' + 
                            '<p class="coupon-top-mask"></p>' + 
                            '<div class="content">' + 
                                '<p>恭喜您领取成功！</p>' + 
                                '<p class="amount"><span>' + amount + '</span>元</p>' + 
                                '<p>请到“我的-账户余额”查看</p>' + 
                                '<a class="btn" id="couponBtn">确定</a>' + 
                            '</div>' + 
                        '</div>' + 
                    '</div>';

        $('body').append(html);
    },

    receiveError: function(){
        var html = '<div class="coupon-mask">' + 
                        '<div class="coupon-modal receive-error">' + 
                            '<i class="coupon-gold-icon"></i>' + 
                            '<p class="coupon-top-mask"></p>' + 
                            '<div class="content">' + 
                                '<p>领取失败，请重试</p>' + 
                                '<a class="btn" id="couponBtn">确定</a>' + 
                            '</div>' + 
                        '</div>' + 
                    '</div>';

        $('body').append(html);
    }
}

main.init();