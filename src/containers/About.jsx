import React, { Component } from 'react'
import { connect } from 'react-redux'
/**
 * Create About Container
 */
 class About extends Component{
 	render(){
 		return (
 			<section className="section">
 			<div className="container">
 			<div className="heading">
 			<h1 className="title">About Us</h1>
 			</div>
 			<p>
 			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a mi porttitor, fermentum mauris quis, venenatis eros. Mauris vel augue consequat, accumsan dolor sit amet, porta ex. Vivamus vitae magna quis purus aliquet viverra. Vivamus aliquet vitae justo a congue. Sed dignissim felis vitae ex pulvinar, vel interdum nisl mattis. Pellentesque nec dapibus tortor, nec laoreet tellus. Maecenas scelerisque leo vitae sapien fermentum, sit amet tempus nunc commodo. Phasellus sed tristique justo.

 			Fusce ac facilisis justo. Pellentesque odio neque, placerat eget purus ac, bibendum semper lorem. Nam luctus hendrerit finibus. Nunc at quam tortor. Cras cursus aliquam dapibus. Nulla magna metus, sodales id ipsum quis, fringilla auctor risus. Maecenas sit amet magna commodo, mollis risus id, porta neque.

 			Maecenas a nulla id ipsum condimentum porttitor. Curabitur aliquam turpis at suscipit ornare. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam elementum magna at dolor tempus pulvinar. In commodo sem ut risus auctor semper. In hac habitasse platea dictumst. Integer id vehicula urna. Proin vitae vulputate sem, in laoreet leo.

 			Duis sed ligula id mauris suscipit euismod et vel odio. Maecenas ex ex, aliquam ac dictum id, egestas at arcu. Cras convallis, quam id mollis auctor, erat nibh consectetur sapien, tempus hendrerit orci tellus non lectus. Quisque imperdiet scelerisque dapibus. Donec venenatis sed enim consequat tincidunt. Praesent non urna in nulla malesuada malesuada a a ipsum. Suspendisse et magna vel nulla pharetra blandit ac eu erat. Quisque ut convallis ipsum. Donec quis tortor ac nisl mattis efficitur eu at nulla. Aenean erat nibh, congue non ipsum sed, pellentesque accumsan magna. Integer non aliquam dolor, sed egestas odio. Duis eget tortor non lacus aliquet lacinia. Nulla tristique pellentesque interdum. Sed ut tempor augue. In vel vestibulum erat, ac laoreet leo.

 			Maecenas et pulvinar magna. Nullam fringilla gravida lectus eget consectetur. Suspendisse potenti. Praesent congue lorem vel ante volutpat, ac euismod diam interdum. Vivamus elementum tortor ac neque suscipit, ac dignissim nisl convallis. Praesent sapien augue, volutpat quis pretium vel, tempus ut mauris. Quisque vel vulputate risus. Aenean semper nulla ut nisl efficitur varius. Quisque condimentum orci eu fermentum cursus. Nullam aliquet lacus eget bibendum lobortis. Aliquam congue viverra aliquam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer ut lacus id tellus vehicula viverra.

 			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo odio ut nulla fringilla, eu auctor nisi feugiat. Fusce semper eu sem eget imperdiet. In leo leo, ullamcorper vel nisl id, pretium vulputate diam. Quisque a imperdiet nulla, et rutrum nunc. Aliquam elementum congue tristique. Proin aliquet mauris nunc, eu tincidunt leo iaculis ut. Vivamus vel purus sit amet nulla interdum bibendum. Aliquam eget auctor libero. Phasellus efficitur malesuada velit. Aliquam viverra feugiat turpis cursus porttitor. Vestibulum scelerisque dui sit amet justo feugiat, a commodo est eleifend. Donec maximus mattis nibh, non interdum libero pulvinar a. Maecenas elit erat, faucibus ac sapien consectetur, aliquet mattis eros. Donec sodales faucibus lacinia. Nunc in elit vitae dolor porta ultricies nec sed tortor.

 			Sed enim lacus, volutpat nec venenatis eu, vehicula id orci. Proin id tellus velit. Proin laoreet scelerisque ex nec fringilla. Suspendisse potenti. Nullam eget ipsum vitae tellus dapibus venenatis fermentum ac enim. Maecenas vitae justo eu dolor gravida sagittis. In id magna nibh. Praesent nec convallis lacus. Integer vel egestas ligula, at eleifend lacus. Mauris dignissim eget ligula a volutpat. Cras viverra dignissim augue in aliquam. Duis non elit fringilla, tristique leo at, venenatis magna. Pellentesque ultrices ut felis et commodo. Nam nec sagittis dui, ut interdum sem. Aliquam eu congue odio.

 			Donec ut maximus urna, sed lobortis justo. Quisque dignissim ullamcorper fermentum. Donec molestie vitae tortor ac varius. Integer suscipit massa nec justo lobortis, ut imperdiet elit suscipit. Morbi volutpat, leo eget vestibulum varius, arcu neque egestas diam, et aliquet justo quam ut elit. Fusce efficitur, eros at lacinia porta, mauris libero varius massa, in fringilla lorem massa eu nunc. Suspendisse ultricies tellus justo, non tincidunt est convallis sed. Suspendisse id venenatis augue. Quisque vestibulum, leo eget eleifend tincidunt, nunc tellus convallis purus, nec tristique sapien est sodales lorem. In vel consequat quam, vel egestas est. Pellentesque ac vehicula libero, non porttitor ipsum. Aliquam vulputate dignissim felis, vel ultrices tortor elementum vel. Nullam ornare dolor nec purus bibendum hendrerit. Vestibulum blandit, augue in commodo hendrerit, urna quam eleifend elit, a efficitur ex tortor vitae diam. Praesent cursus ornare leo, a porttitor tellus luctus id.

 			Phasellus pharetra lorem ut pharetra mattis. In placerat, ex eu vestibulum consequat, orci lorem consequat nisl, eu eleifend metus est eu mi. Morbi tincidunt feugiat nulla ut rhoncus. Fusce rhoncus pellentesque risus sit amet vestibulum. Etiam sodales velit nibh, ut blandit lorem blandit et. Sed lacinia aliquet suscipit. Aliquam sit amet mauris dolor. Cras vitae est at orci ultricies aliquet et in massa. Morbi vitae justo elit.

 			Donec posuere est at lacus interdum dictum id sed arcu. Nam quis scelerisque metus. Phasellus sem turpis, aliquam nec elementum nec, pulvinar ac urna. Nulla congue gravida nulla, non consequat metus viverra ac. Etiam aliquet eleifend scelerisque. Donec dictum congue purus quis viverra. Nulla dapibus sodales ultrices.
 			</p>
 			</div>
 			</section>
 			)
    }
}
/**
 * Insert Props Into Component
 */
 const stateProps = (state) => {
 	return { 

 	}
 }

 export default connect(stateProps)(About)