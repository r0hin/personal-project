import 'package:flutter/material.dart';

class DirectPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
      children: [
        FlatButton(
          onPressed: () {
            print('wow');
          },
          padding: EdgeInsets.all(15.0),
          child: Text('Direct Page'),
        )
      ],
    ));
  }
}
