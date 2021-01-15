import 'package:flutter/material.dart';

class EchoPost extends StatelessWidget {
  EchoPost(
      {@required caption,
      @required img,
      @required author,
      @required id,
      @required likes,
      @required isLiked})
      : this.caption = caption,
        this.img = img,
        this.author = author,
        this.id = id,
        this.likes = likes,
        this.isLiked = isLiked;
  final caption;
  final img;
  final author;
  final likes;
  final isLiked;
  final id;

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
              children: [
                Image.network(img),
                Text(caption),
                LikeButton(
                  isLiked: isLiked,
                  likes: likes,
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class LikeButton extends StatefulWidget {
  LikeButton({@required isLiked, @required likes})
      : this.likes = likes,
        this.isLiked = isLiked;
  final likes;
  final isLiked;

  @override
  _LikeButtonState createState() => _LikeButtonState();
}

class _LikeButtonState extends State<LikeButton> {
  bool _isLiked = false;
  int _likes = 0;

  void initState() {
    print(widget.isLiked);
    _isLiked = widget.isLiked;
    _likes = widget.likes;

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          padding: EdgeInsets.all(0),
          child: IconButton(
            padding: EdgeInsets.all(0),
            alignment: Alignment.centerRight,
            icon: (_isLiked ? Icon(Icons.star) : Icon(Icons.star_border)),
            color: Colors.red[500],
            onPressed: () {
              print(_isLiked);
            },
          ),
        ),
        SizedBox(
          width: 18,
          child: Container(
            child: Text('$_likes'),
          ),
        ),
      ],
    );
  }
}
