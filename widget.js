WAF.define('SignaturePad', ['waf-core/widget'], function(widget) {

    var mySignaturePad = widget.create('SignaturePad', {
        
        init: function() {

            var $node = $(this.node);
            this.node.innerHTML = "";
            this.node.innerHTML = '<canvas  width="658" height="318" bgColor = "#fff"></canvas>';
            $node.addClass('m-signature-pad');
            $node.find("canvas").attr( 'id', 'canvas_' + this.node.id );
            
            

//            $node.find('button.clear').on('click', function() {
//                this.clear();
//            }.bind(this));

            var that = this;
            if (!window.Designer) {
                this.signaturePad = new SignaturePad($node.find('canvas')[0], {

                    minWidth: 1,
                    maxWidth: 4,
                    penColor: 'Black',
                    dotSize : this.dotSize,
                    onBegin: function() {
                        that.fire('Begin');
                    },
                    onEnd: function() {
                        that.fire('End');
                    }
                });
            }
        },
        
        dotSize: widget.property({
            type: 'number',
            defaultValue: 0.2
        }),
//        minWidth: widget.property({
//            type: 'number',
//            defaultValue: 1
//        }),
//        maxWidth: widget.property({
//            type: 'number',
//            defaultValue: 4
//        }),
//        backgroundColor: widget.property({
//            type: 'string',
//            defaultValue: "#fff"
//        }),
//        penColor: widget.property({
//            type: 'string',
//            defaultValue: 'black'
//        }),
//        velocityFilterWeight: widget.property({
//            type: 'number',
//            defaultValue: 0.7
//        }),

        clear: function() {
            this.signaturePad.clear();
        },
        isEmpty: function() {
            return this.signaturePad.isEmpty();
        },
        toDataURL: function() {
            if (this.isEmpty()) {
                alert('Please provide signature first.');
            }
            else {
                dataURL = this.signaturePad.toDataURL();
                $('img').attr('src', dataURL);
                this.append(img);
            }
        }
    });

    //    /* Map the custom event above to the DOM click event */
    //    SignaturePad.mapDomEvents({
    //        'click': 'action'
    //    });
    return mySignaturePad;

});