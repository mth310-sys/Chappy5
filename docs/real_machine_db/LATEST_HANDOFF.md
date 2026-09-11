更新日: 2026-09-12

## 現在地点
- recordCount: **1395**
- latestRecordAdded: **パチスロ北斗の拳 宿命 — No.1395**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-03-08_hokuto-no-ken-shukumei.md`
- chronologicalFrontier: **2021-03-08**
- frontierLatestMachine: **パチスロ北斗の拳 宿命 — No.1395**
- schema: **resetBehavior v0.7**
- status: **2021-03-08_GROUP_OPEN_1_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード群を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 並行更新で2021-02-08群がNo.1394まで先行していたため、重複せず最新mainへ追従。
- 2021-02-09〜03-07境界を監査。パチ7の2021年2月カレンダーでは2/15・2/22にパチスロ新台なし、K-Navi/1gekiの3月カレンダーでも3/1はパチスロ0機、次の全国主要導入日は3/8で整合。
- 2021-03-08群は全国カレンダー5機に加え、沖縄地域流通の **ミスタートリプルクラウン（型式 SトリプルクラウンDX-30）** をHAZUSE/P-WORLDで2021-03-08導入として確認。全機種方針上、地域限定機も同群へ含める。
- 3/8群の先頭として **No.1395「パチスロ北斗の拳 宿命」**を追加。
- 遡及resetBehavior QAカーソルは今回動かさず、次回 `2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）から継続。

## No.1395 — パチスロ北斗の拳 宿命
- path: `docs/real_machine_db/machines/2021-03-08_hokuto-no-ken-shukumei.md`
- manufacturer: **サミー**
- formalModel: **S パチスロ北斗の拳AC LA**
- certificationNumber: **0S1190**
- releaseDate: **2021-03-08**
- generation/system: **6.1号機 / AT / CZ・直撃経由 / ダブルAT**
- payoutRateBySetting: **98.0 / 99.1 / 100.7 / 104.3 / 109.0 / 111.1%**
- AT初当たり: **1/340.1 / 335.1 / 315.3 / 283.4 / 243.0 / 194.2**
- baseGamesPer50: **約35.8G**
- netIncrease: **約2.8枚/G**
- basicPayout: **BB伝承=前半15G or 30G+α＋継続バトル4G / BB拳王=初期150枚以上**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_HIGH_START**

### resetBehavior v0.7 — No.1395
- 設定変更: **天井RESET / 北斗・七星カウンターRESET / 有利区間RESET / 高確スタート / 荒野ステージ開始**。
- 据え置き: **天井・内部状態・有利区間CARRY_OVER**。
- 純電断: **天井・内部状態・有利区間CARRY_OVER**。北斗/七星カウンターは表示上非表示化するが内部値は引継ぎ。
- 天井: **有利区間開始後800G+αでBB**。設定変更専用の短縮天井は確認できない。
- 朝一恩恵: **設定変更後は高確スタート**。高確中はCZ/AT抽選が優遇されるため客側朝一価値あり。
- 通常時有利区間ランプ点灯型のため、未対策なら **朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚**。前日非有利区間終了等の例外あり。
- ガックンは一部攻略資料で設定変更後1G目の判別材料とされるが、本機固有発生率/対策時挙動は固定できず `UNVERIFIED_AFTER_RESEARCH`。

## 2021-03-08群 — OPEN
固定キュー:
1. **パチスロ北斗の拳 宿命 — No.1395 / DONE**
2. **パチスロ青の祓魔師 — NEXT / No.1396候補**
3. **パチスロラブ嬢2プラス**
4. **パチスロ アイドルマスター ミリオンライブ！**
5. **ワンチャンス1000**
6. **ミスタートリプルクラウン（SトリプルクラウンDX-30 / 沖縄地域流通）**

- status: **2021-03-08_GROUP_OPEN_1_OF_6_KNOWN_PROCESSED**。
- K-Navi/1geki全国カレンダーは主要5機を掲載。HAZUSE/P-WORLDで地域限定のミスタートリプルクラウンを追加確認。
- 6機処理後、全メーカー・別型式・PB・地域差・延期/段階導入を再監査してCLOSED可否を判定する。

## 次回本線の再開地点
- 最新main再同期後、同じ2021-03-08群の **No.1396候補「パチスロ青の祓魔師」** から継続。
- 性能コア + resetBehavior v0.7を同時収集。設定変更/据え置き/純電断、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を優先確認する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）。
- 今回は本線を優先したためカーソル未移動。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）**。

## GitHub保存
- No.1392追加 commit: `0c434e855141de687c064b15830b345c3117dd9b`
- No.1393追加 commit: `91a46749da9fc5fcc82313d5ecfc7ae5b2f239dd`
- No.1394追加 commit: `b8ff286f3cf91d6a2474258735222979c2f0c7b6`
- No.1395追加 commit: `a51b8a308b8e86bfc75dc5a0542557e71dcf3c51`

## 主要出典 — 取得日 2026-09-12
### 境界 / 2021-03-08群
- https://pachiseven.jp/articles/detail/12690
- https://p-kn.com/calendar/202103/
- https://1geki.jp/newmachinecalender/202103/
- https://hazuse.com/machine/pachislot/1S0376/
- https://www.p-world.co.jp/machine/database/9361

### No.1395 北斗の拳 宿命
- https://www.pidea.jp/articles/1607067966
- https://hazuse.com/machine/pachislot/0S1190/
- https://p-kn.com/slot/3522/
- https://ichikatsu.com/hokutosyukumei/
- https://p.hisshobon.jp/machine/3589/1/79999
- https://slotjin.com/tenjoukitaichi/hokutoshukumei/
- https://slot-seven.com/hokutonokensyukumei-settei/
- https://www.p-world.co.jp/machine/database/9300
- https://nana-press.com/kaiseki/machine/103/2809/
