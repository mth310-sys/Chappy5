更新日: 2026-09-12

## 現在地点
- recordCount: **1394**
- latestRecordAdded: **パチスロKING黄門ちゃま — No.1394**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-02-08_king-komonchama.md`
- chronologicalFrontier: **2021-02-08**
- frontierLatestMachine: **パチスロKING黄門ちゃま — No.1394**
- schema: **resetBehavior v0.7**
- status: **2021-02-08_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1391「パチスロ フレームアームズ・ガール」を再取得して開始。
- `INDEX.md` は旧表示（19件）のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 2021-02-08群の未処理3機を時系列キューのまま追加:
  - **No.1392 パチスロ ゴッドイーター ジ・アニメーション**
  - **No.1393 政宗3**
  - **No.1394 パチスロKING黄門ちゃま**
- パチ7 2021年2月カレンダーと別系統導入予定一覧を再横断し、2/8パチスロ群は「バイオハザード7 / フレームアームズ・ガール / KING黄門ちゃま / 政宗3 / ゴッドイーター ジ・アニメーション」の5機で一致。5/5処理済みのためCLOSED。
- 2/15・2/22は当時カレンダーでパチスロ新台掲載なし。次の主要導入日は2021-03-08。
- 3/8群は複数資料で「北斗の拳 宿命 / 青の祓魔師 / ラブ嬢2プラス / アイドルマスター ミリオンライブ！ / ワンチャンス1000」を確認。一方、6号機一覧には地域系 **Sトリプルクラウン** も2021-03-08掲載があるため、採番前に全メーカー・地域差を再監査する。
- 今回は本線3機を優先し、遡及resetBehavior QAカーソルは動かしていない。

## No.1392 — パチスロ ゴッドイーター ジ・アニメーション
- path: `docs/real_machine_db/machines/2021-02-08_god-eater-the-animation.md`
- manufacturer: **セブンリーグ**
- formalModel: **SパチスロゴッドイータージアニメSLHH**
- certificationNumber: **0S1116**
- releaseDate: **2021-02-08**
- generation/system: **6.1号機 / AT / CZ経由 / 純増可変型AT**
- payoutRateBySetting: **98.0 / 98.8 / 99.7 / 102.7 / 106.9 / 109.0%**
- CZ初当たり: **1/440.7 / 433.1 / 426.3 / 405.2 / 369.9 / 356.9**
- baseGamesPer50: **約51.0G**
- netIncrease: **約2.5 / 3.5 / 4.5 / 5.5 / 8.0枚/G**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_MODE_TABLE**

### resetBehavior v0.7 — No.1392
- 設定変更: **天井RESET / 内部状態RESET / 有利区間RESET→新規有利区間**。
- 据え置き / 純電断: **天井・内部モード/状態・有利区間CARRY_OVER**。
- 新規有利区間では通常A or SP-A。SP-A選択率は設定1 **9.0%** → 設定6 **81.8%**。
- 通常A天井777G+α、SP-A天井400G+α。固定リセット短縮ではなく、モード選択による実質短縮として分離。
- 通常モードの有利区間移行時状態は高確80.5% / 超高確19.5%。SP時詳細は `UNVERIFIED_AFTER_RESEARCH`。
- 本機は通常時ランプ基本消灯型。朝一点灯なら据え置き+有利区間引継ぎ濃厚、消灯だけでは設定変更確定不可。
- 本機固有ガックン条件/発生率は `UNVERIFIED_AFTER_RESEARCH`。

## No.1393 — 政宗3
- path: `docs/real_machine_db/machines/2021-02-08_masamune3.md`
- manufacturer: **大都技研**
- formalModel: **S政宗3CA5**
- certificationNumber: **0S1134**
- releaseDate: **2021-02-08**
- generation/system: **6.1号機 / AT / ポイント・周期抽選 / CZ経由差枚数管理AT**
- payoutRateBySetting canonical: **97.4 / 98.9 / 100.6 / 103.6 / 106.7 / 110.5%**
- initialHit: **1/358.8 / 346.4 / 333.7 / 313.4 / 293.0 / 274.0**
- baseGamesPer50: **約38G**
- netIncrease: **BONUSパート約3.7枚/G**
- coreStatus: **COMPLETE_CORE_WITH_PAYOUT_CONFLICT**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_INITIAL_MODE_TABLE**

### resetBehavior v0.7 — No.1393
- 設定変更: 天井進行RESET / 内部モード再抽選 / 有利区間RESET。
- 据え置き / 純電断: 天井進行・内部モード・有利区間CARRY_OVER。
- 設定変更後初回出陣モードの設定別7モード振り分けを保存。設定1でもチャンス以上合計約50%。
- 通常時点灯型のため朝一点灯=据え置き濃厚、消灯=設定変更濃厚。ただし例外あり。
- 設定6機械割は多数資料 **110.5%** に対しHAZUSE本文表のみ **111.5%**（同ページヘッダは110.5%）。平均せず `CONFLICT_SETTING6_PAYOUT_110.5_VS_111.5`、canonical 110.5%。
- 本機固有ガックンは `UNVERIFIED_AFTER_RESEARCH`。

## No.1394 — パチスロKING黄門ちゃま
- path: `docs/real_machine_db/machines/2021-02-08_king-komonchama.md`
- manufacturer: **オリンピア**
- formalModel: **SパチスロKING黄門ちゃまL6**
- certificationNumber: **0S0290**
- releaseDate: **2021-02-08**
- generation/system: **6.1号機 / AT / CZ経由 / 差枚数管理型AT**
- payoutRateBySetting canonical: **97.3 / 98.6 / 100.3 / 103.6 / 107.0 / 110.0%**
- CZ: **1/271.8 / 267.4 / 257.7 / 245.3 / 230.3 / 215.3**
- AT canonical: **1/523.2 / 487.9 / 434.3 / 373.9 / 319.7 / 276.5**
- baseGamesPer50: **約38.3G**
- netIncrease: **約6.0枚/G**
- coreStatus: **COMPLETE_CORE_WITH_CONFLICTS**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_INITIAL_MODE_TABLE**

### resetBehavior v0.7 — No.1394
- 設定変更: **有利区間・天井・内部モード・内部状態・八兵衛pt RESET**。液晶は**お銀旅館**開始。
- 据え置き: 有利区間・天井・内部モード/状態をCARRY_OVER側として扱う。
- 純電断: 有利区間・天井・内部モード/状態CARRY_OVER。八兵衛pt/開始ステージのみ `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間開始時モードA〜Eの設定別公開振り分けを保存。設定1でもD以上51.6%、設定6 D以上70.3%。
- モード別天井: A600 / B500 / C310 / D200 / E200G（Eは99.6%で100G）。
- 有利区間移行時は高確スタート確定。
- 通常時ランプ点灯型。朝一点灯=据え置き濃厚 / 消灯=設定変更濃厚、例外あり。
- 機械割設定6は多数資料110.0% vs HAZUSE 111.0%。AT設定1は多数1/523.2 vs HAZUSE 1/532.2。双方をCONFLICT保持。

## 2021-02-08群 — CLOSED
処理済み:
1. **パチスロ バイオハザード7 レジデント イービル — No.1390**
2. **パチスロ フレームアームズ・ガール — No.1391**
3. **パチスロ ゴッドイーター ジ・アニメーション — No.1392**
4. **政宗3 — No.1393**
5. **パチスロKING黄門ちゃま — No.1394**

- status: **2021-02-08_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- パチ7月間カレンダーと別系統新台一覧で5機一致。

## 次回本線の再開地点
- 最新main再同期後、**2021-02-09〜2021-03-07の境界を最終監査**。
- その後 **2021-03-08群**を全メーカー・地域差・別型式・延期/段階導入込みで確定してからNo.1395を採番する。
- 現時点の確認候補:
  - パチスロ北斗の拳 宿命
  - パチスロ青の祓魔師
  - パチスロラブ嬢2プラス
  - パチスロ アイドルマスター ミリオンライブ！
  - ワンチャンス1000
  - Sトリプルクラウン（地域系資料に2021-03-08掲載。群確定監査必須）
- 3/8の先頭No.1395候補は、同日群内の採番規則・資料順を再確認後に決定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05-13_urusei-yatsura.md`（うる星やつら）。
- 今回は本線3機を優先したためカーソル未移動。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）**。

## GitHub保存
- No.1392追加 commit: `0c434e855141de687c064b15830b345c3117dd9b`
- No.1393追加 commit: `91a46749da9fc5fcc82313d5ecfc7ae5b2f239dd`
- No.1394追加 commit: `b8ff286f3cf91d6a2474258735222979c2f0c7b6`

## 主要出典 — 取得日 2026-09-12
### No.1392 ゴッドイーター ジ・アニメーション
- https://web-greenbelt.jp/post-44076/
- https://hazuse.com/machine/pachislot/0S1116/
- https://1geki.jp/slot/s_gea/
- https://1geki.jp/slot/s_gea/41/
- https://chonborista.com/slot/yamasa-slot/124052/
- https://slotjin.com/tenjoukitaichi/godeateranime/
- https://nana-press.com/kaiseki/machine/99/2465/
- https://nana-press.com/kaiseki/machine/99/2864/
- https://nana-press.com/kaiseki/machine/99/2865/
- https://www.pachibee.jp/machines/about/220120000

### No.1393 政宗3
- https://web-greenbelt.jp/post-43414/
- https://hazuse.com/machine/pachislot/0S1134/
- https://1geki.jp/slot/s_msmn3/
- https://nana-press.com/kaiseki/machine/104/2655/
- https://www.p-world.co.jp/machine/database/9316
- https://slot-seven.com/masamune3-tenzyou/
- https://slotjin.com/tenjoukitaichi/masamune3/
- https://ichikatsu.com/newslot/

### No.1394 KING黄門ちゃま
- https://web-greenbelt.jp/post-42720/
- https://hazuse.com/machine/pachislot/0S0290/
- https://hazuse.com/machine/pachislot/0S0290/genre/207/
- https://nana-press.com/kaiseki/machine/101/
- https://nana-press.com/kaiseki/machine/101/2923/
- https://nana-press.com/kaiseki/machine/101/2931/
- https://1geki.jp/slot/s_king_km_index/42/
- https://hisshobon.news/uncategorized/2327/
- https://www.p-world.co.jp/machine/database/9293
- https://www.slopachi-quest.com/article/king-koumoncyama-tenjou/

### 2021-02-08群 / 次群監査
- https://pachiseven.jp/articles/detail/12690
- https://crankyseven.com/newmachine-info.htm
- https://sulocale.sulopachinews.com/archives/43927
