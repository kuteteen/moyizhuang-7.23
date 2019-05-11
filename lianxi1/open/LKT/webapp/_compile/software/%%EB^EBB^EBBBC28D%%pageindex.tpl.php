<?php /* Smarty version 2.6.26, created on 2019-01-11 09:04:15
         compiled from pageindex.tpl */ ?>


<!DOCTYPE HTML>

<html>

<head>

<meta charset="utf-8">

<meta name="renderer" content="webkit|ie-comp|ie-stand">

<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />

<meta http-equiv="Cache-Control" content="no-siteapp" />



<link href="style/css/H-ui.min.css" rel="stylesheet" type="text/css" />

<link href="style/css/H-ui.admin.css" rel="stylesheet" type="text/css" />

<link href="style/css/style.css" rel="stylesheet" type="text/css" />

<link href="style/lib/Hui-iconfont/1.0.7/iconfont.css" rel="stylesheet" type="text/css" />



<title>首页布局管理</title>
<?php echo '
<style>
   	td a{
        width: 44%;
        margin: 2%!important;
        float: left;
    }
</style>
'; ?>


</head>

<body>

<nav class="breadcrumb"><i class="Hui-iconfont">&#xe646;</i>软件管理 <span class="c-gray en">&gt;</span> 小程序首页 <a class="btn btn-success radius r mr-20" style="line-height:1.6em;margin-top:3px" href="javascript:location.replace(location.href);" title="刷新" ><i class="Hui-iconfont">&#xe68f;</i></a></nav>

<div class="pd-20">

    <div style="clear:both;">

        <input type="button" class="btn btn-primary radius" value="添加首页模块" onclick="location.href='index.php?module=software&action=pageadd';" />

    </div>

    <div class="mt-20">

        <table class="table table-border table-bordered table-bg table-hover table-sort">

            <thead>

                <tr class="text-c">

                    <th>序</th>

                    <th>图片/分类</th>

                    <th>链接/分类id</th>

                    <th>排序号</th>

                    <th>发布时间</th>

                    <th style="width:140px">操作</th>

                </tr>

            </thead>

            <tbody>

            <?php $_from = $this->_tpl_vars['list']; if (!is_array($_from) && !is_object($_from)) { settype($_from, 'array'); }$this->_foreach['f1'] = array('total' => count($_from), 'iteration' => 0);
if ($this->_foreach['f1']['total'] > 0):
    foreach ($_from as $this->_tpl_vars['item']):
        $this->_foreach['f1']['iteration']++;
?>

                <tr class="text-c">

                    <td><?php echo $this->_foreach['f1']['iteration']; ?>
</td>

                    <td>
                        <?php if ($this->_tpl_vars['item']->type == 'img'): ?>
                        <image class='pimg' src="<?php echo $this->_tpl_vars['item']->image; ?>
" style="width: 150px;height:80px;"/>
                         <?php else: ?>
                         <?php echo $this->_tpl_vars['item']->name; ?>

                         <?php endif; ?>
                    </td>

                    <td><?php echo $this->_tpl_vars['item']->url; ?>
</td>

                    <td><?php echo $this->_tpl_vars['item']->sort; ?>
</td>

                    <td><?php echo $this->_tpl_vars['item']->add_date; ?>
</td>

                    <td>

                        <a style="text-decoration:none" class="ml-5" href="index.php?module=software&action=pagemodify&id=<?php echo $this->_tpl_vars['item']->id; ?>
&yimage=<?php echo $this->_tpl_vars['item']->image; ?>
" title="修改" >
                        	<div style="align-items: center;font-size: 12px;display: flex;">
                            	<div style="margin:0 auto;;display: flex;align-items: center;"> 
                                <img src="images/icon1/xg.png"/>&nbsp;修改
                            	</div>
                    		</div>
                        </a>

                        <a style="text-decoration:none" class="ml-5" href="index.php?module=software&action=pagedel&id=<?php echo $this->_tpl_vars['item']->id; ?>
&yimage=<?php echo $this->_tpl_vars['item']->image; ?>
" onclick="return confirm('确定要删除此首页模块吗?')">
                        	<div style="align-items: center;font-size: 12px;display: flex;">
                            	<div style="margin:0 auto;;display: flex;align-items: center;"> 
                                <img src="images/icon1/del.png"/>&nbsp;删除
                            	</div>
                    		</div>
                        </a>

                    </td>

                </tr>

            <?php endforeach; endif; unset($_from); ?>

            </tbody>

        </table>

    </div>

</div>

<div id="outerdiv" style="position:fixed;top:0;left:0;background:rgba(0,0,0,0.7);z-index:2;width:100%;height:100%;display:none;"><div id="innerdiv" style="position:absolute;"><img id="bigimg" src="" /></div></div> 



<script type="text/javascript" src="style/js/jquery.js"></script>



<script type="text/javascript" src="style/lib/jquery/1.9.1/jquery.min.js"></script> 

<script type="text/javascript" src="style/lib/layer/2.1/layer.js"></script> 

<script type="text/javascript" src="style/lib/My97DatePicker/WdatePicker.js"></script> 

<script type="text/javascript" src="style/lib/datatables/1.10.0/jquery.dataTables.min.js"></script> 

<script type="text/javascript" src="style/js/H-ui.js"></script> 

<script type="text/javascript" src="style/js/H-ui.admin.js"></script>



<?php echo '

<script type="text/javascript">

$(\'.table-sort\').dataTable({

    "aaSorting": [[ 4, "desc" ]],//默认第几个排序

    "bStateSave": true,//状态保存

    "aoColumnDefs": [

      //{"bVisible": false, "aTargets": [ 3 ]} //控制列的隐藏显示

      {"orderable":false,"aTargets":[0,5]}// 制定列不参与排序

    ]

});

$(function(){  

        $(".pimg").click(function(){  

            var _this = $(this);//将当前的pimg元素作为_this传入函数  

            imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  

        });  

    });

function imgShow(outerdiv, innerdiv, bigimg, _this){  

    var src = _this.attr("src");//获取当前点击的pimg元素中的src属性  

    $(bigimg).attr("src", src);//设置#bigimg元素的src属性  

  

        /*获取当前点击图片的真实大小，并显示弹出层及大图*/  

    $("<img/>").attr("src", src).load(function(){  

        var windowW = $(window).width();//获取当前窗口宽度  

        var windowH = $(window).height();//获取当前窗口高度  

        var realWidth = this.width;//获取图片真实宽度  

        var realHeight = this.height;//获取图片真实高度  

        var imgWidth, imgHeight;  

        var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  

          

        if(realHeight>windowH*scale) {//判断图片高度  

            imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放  

            imgWidth = imgHeight/realHeight*realWidth;//等比例缩放宽度  

            if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度  

                imgWidth = windowW*scale;//再对宽度进行缩放  

            }  

        } else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度  

            imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放  

                        imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度  

        } else {//如果图片真实高度和宽度都符合要求，高宽不变  

            imgWidth = realWidth;  

            imgHeight = realHeight;  

        }  

                $(bigimg).css("width",imgWidth);//以最终的宽度对图片缩放  

          

        var w = (windowW-imgWidth)/2;//计算图片与窗口左边距  

        var h = (windowH-imgHeight)/2;//计算图片与窗口上边距  

        $(innerdiv).css({"top":h, "left":w});//设置#innerdiv的top和left属性  

        $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及.pimg  

    });  

      

    $(outerdiv).click(function(){//再次点击淡出消失弹出层  

        $(this).fadeOut("fast");  

    });  

} 

</script>

'; ?>


</body>

</html>