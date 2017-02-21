import 'dart:async';

import 'package:angular2/core.dart';
import 'package:angular2/router.dart';

import 'crisis.dart';
import 'crisis_service.dart';
import 'dialog_service.dart';

@Component(
    selector: 'my-crisis-detail',
    templateUrl: 'crisis_detail_component.html',
    styleUrls: const ['crisis_detail_component.css'])
class CrisisDetailComponent implements CanDeactivate, OnInit {
  Crisis crisis;
  String name;
  final CrisisService _crisisService;
  final Router _router;
  final RouteParams _routeParams;
  final DialogService _dialogService;

  CrisisDetailComponent(this._crisisService, this._router, this._routeParams,
      this._dialogService);

  Future<Null> ngOnInit() async {
    var _id = _routeParams.get('id');
    var id = int.parse(_id ?? '', onError: (_) => null);
    if (id != null) crisis = await (_crisisService.getCrisis(id));
    if (crisis != null) name = crisis.name;
  }

  Future<Null> save() async {
    crisis.name = name;
    goBack();
  }

  Future goBack() => _router.navigate([
        'CrisesHome',
        crisis == null ? {} : {'id': crisis.id.toString()}
      ]);

  @override
  /*FutureOr<bool>*/ routerCanDeactivate(next, prev) =>
      crisis == null || crisis.name == name
          ? true
          : _dialogService.confirm('Discard changes?');
}
