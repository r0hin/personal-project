import 'package:flutter/material.dart';

class EchoPost extends StatelessWidget {
  EchoPost({@required caption, @required img, @required author})
      : this.caption = caption,
        this.img = img,
        this.author = author;
  final caption;
  final img;
  final author;

  void openPost() {
    print('Opened a post');
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      child: new Card(
        child: InkWell(
          splashColor: Colors.blue.withAlpha(30),
          onTap: openPost,
          child: Container(
            padding: EdgeInsets.all(30),
            child: Column(
              children: [Image.network(img), Text(caption)],
            ),
          ),
        ),
      ),
    );
  }
}
