更新日: 2026-09-11

## 現在地点
- recordCount: **1378**
- latestRecordAdded: **パチスロ モンスターハンター:ワールド™ — No.1378**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-11-16_monster-hunter-world.md`
- chronologicalFrontier: **2020-11-16**
- frontierLatestMachine: **パチスロ モンスターハンター:ワールド™ — No.1378**
- schema: **resetBehavior v0.7**
- status: **2020-11-16_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1377「アカメが斬る！」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新handoffとmain実レコードを正本として進捗を判定。
- 開始時mainは会話上のNo.1373より先行し、**No.1377 / 2020-11-09群CLOSED** まで完了済みだったため重複せず次の未処理境界へ継続。
- 1geki 2020年11月カレンダーを監査し、11/10～11/15に別パチスロ導入群を確認せず、11/16のスロットは「パチスロ モンスターハンター:ワールド™」1機のみと確認。
- No.1378を性能コア+resetBehavior v0.7で追加。
- 11/16は1geki月間カレンダー上「全3機種 / パチンコ2 / スロット1」。HAZUSE・パチビー・複数解析でも導入日/型式/主要性能を照合し、別型式・別スペック・PBの追加同日機を固定できず **2020-11-16群CLOSED** と判定。
- 2020年11月は1geki月間カレンダー上のスロット6機が 11/02=4機、11/09=1機、11/16=1機で全て処理済み。11/17以降の同月独立パチスロ導入群は同カレンダー上確認なし。

## No.1378 — パチスロ モンスターハンター:ワールド™
- path: `docs/real_machine_db/machines/2020-11-16_monster-hunter-world.md`
- manufacturer: **エンターライズ**
- formalModel: **SモンスターハンターワールドZI**
- certificationNumber: **0S0948**
- releaseDate: **2020-11-16**
- generation/system: **6号機 / AT / 擬似ボーナス / クエスト周期 / 有利区間管理**
- 出玉率: **97.4 / 98.8 / 100.7 / 105.2 / 108.1 / 111.2%**
- ボーナス初当たり: **1/375.1 / 1/356.8 / 1/336.3 / 1/306.7 / 1/284.6 / 1/262.6**
- base: **約51.3G/50枚（設定1）**
- netIncrease: **約3.0枚/G**
- basicPayout: **BBは狩猟失敗まで継続 / アイルーボーナスはベル8回成立まで / 剥ぎ取りRUSHはベル8回成立まで・平均FRストック7個**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS**

### 天井構造
- 有利区間突入時に **最低50%** で天井権利となる「有利区間引き継ぎ抽選」を実施。
- 権利獲得時のみ **同一有利区間750G** または **クエスト3スルー** でボーナス告知。
- 非当選時はクエスト終了後に有利区間をリセットし、次回有利区間突入時に再抽選するため、見た目上750G超のハマリが発生し得る。
- 単純な「通常時最大750G」ではないため、詳細契約をcanonicalとして保存。

### resetBehavior v0.7 — No.1378
- 設定変更: **有利区間RESET→非有利区間 / 天井RESET / アステラ開始 / ガックンなし**。
- 据え置き・純電源OFF→ON: **有利区間CARRY_OVER / 天井CARRY_OVER / 内部状態CARRY_OVER**。
- 電断復帰: 狩猟中なら狩猟状態、フィールドならアステラorフィールド、AT中ならOFF前の出玉状態に応じ復帰。
- 設定変更後の詳細な内部状態初期振り分けは直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時は有利区間ランプ基本消灯型のため **朝一消灯では変更判別不可**。
- 朝一アステラは変更/据え置き双方で起こり得るため判別不可。朝一クエスト/狩猟なら据え置き濃厚〜条件一致時は据え置き確定扱いの解析あり。
- 設定変更専用の一律短縮天井・専用モード振り分け・専用初当たり/CZ数値は横断再探索後も公開値を固定できず `UNVERIFIED_AFTER_RESEARCH` / `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。
- リセット専用の明確な恩恵は複数攻略整理で **特になし**。有利区間突入時の最低50%抽選は設定変更専用ではなく共通仕様。

### publicMorningNumbers / reset numeric
- 有利区間突入時の天井権利抽選: **最低50%**。
- 当選時: **750G or 3クエストスルー**でボーナス告知。
- 非当選時: クエスト終了後に有利区間リセット→次回有利区間突入時に再度最低50%抽選。
- 定義: **有利区間突入時共通値**。設定変更専用値ではない。

## conflicts / 定義差
- 天井: 一部概要資料は「3周期+α」「750G」と簡略表記。詳細解析では有利区間突入時の最低50%引き継ぎ抽選当選時のみ権利が有効。本DBは詳細契約をcanonicalとし、固定最大750Gとはしない。
- 型式表記: `SモンスターハンターワールドZI` / `SモンスターハンターワールドZⅠ` は字体差として同一型式扱い。

## 2020-11-16群監査 — CLOSED
処理済み:
1. **パチスロ モンスターハンター:ワールド™ — No.1378**

- 1geki月間カレンダーは11/16を「全3機種 / パチンコ2 / スロット1」とし、本機のみ。
- HAZUSE、パチビーも2020-11-16導入で一致。
- 11/10～11/15境界に独立パチスロ導入群を今回固定できず、11/16群をCLOSED。
- 2020年11月のスロット6機は11/02=4、11/09=1、11/16=1で全件処理済み。

## 次回本線の再開地点
- 最新main再同期後、**2020-11-17～2020-12-13境界監査**。
- 1geki 2020年12月カレンダーでは **2020-12-07はスロット0機**。
- 次の既知未処理は **2020-12-14「アイムジャグラーEX（6号機）」— No.1379候補**。
- 12/14群処理前に、11/17～12/13の別型式・地域先行・PB・延期機を業界/旧DBでも再監査する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 直前処理: `docs/real_machine_db/machines/2007-04_dance-man.md`（ダンス☆マン）。
- 次回遡及QA: **`docs/real_machine_db/machines/2007-04-01_slot-channel-tv.md`（スロットチャンネルTV）**。
- 今回は本線を優先し、遡及QA地点は進めていない。

## GitHub保存
- No.1378追加 commit: `ea000adff730d286247b8cda152b52ef8585d7c0`

## 主要出典 — 取得日 2026-09-11
### No.1378 パチスロ モンスターハンター:ワールド™
- https://hazuse.com/machine/pachislot/0S0948/genre/201/
- https://hazuse.com/machine/pachislot/0S0948/genre/203/
- https://hazuse.com/machine/pachislot/0S0948/genre/209/
- https://1geki.jp/slot/s_mhw/0/
- https://1geki.jp/slot/s_mhw/3/
- https://1geki.jp/slot/s_mhw/4/
- https://1geki.jp/slot/s_mhw/62/
- https://nana-press.com/kaiseki/machine/88/2106/
- https://nana-press.com/kaiseki/machine/88/2151/
- https://www.pachibee.jp/machines/index/220100005
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/21/kr01.php
- https://chonborista.com/slot/enta-slot/120055/
- https://slotmethod.jp/archives/9532/

### 11月群・次回境界
- https://1geki.jp/newmachinecalender/202011/
- https://1geki.jp/newmachinecalender/202012/
