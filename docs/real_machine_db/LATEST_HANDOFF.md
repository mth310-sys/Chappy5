更新日: 2026-09-11

## 現在地点
- recordCount: **1315**
- latestRecordAdded: **パチスロ北斗の拳 天昇 — No.1315**
- latestRecordAddedPath: `docs/real_machine_db/machines/2019-11-05_hokuto-no-ken-tensho.md`
- chronologicalFrontier: **2019-11-05**
- frontierLatestMachine: **パチスロ北斗の拳 天昇 — No.1315**
- schema: **resetBehavior v0.7**
- status: **2019_11_05_GROUP_OPEN_1_OF_3_CONFIRMED_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1314 `PYRAMID EYE` を再取得。
- `INDEX.md` は古い19件表示だが、READMEの明示ルールどおりINDEXより新しい `LATEST_HANDOFF.md` とmain実レコードを正本進捗として優先し、No.1314の次から継続。
- 保留 `プレドキ！` を再監査。P-WORLDは2019-12-02時点で機種DB掲載を確認できるが、具体的な初回ホール導入日を固定できる一次/当時資料は今回も未取得。時系列本線を止めず保留継続。
- No.1315 **パチスロ北斗の拳 天昇**を追加。
- 2019-11-05群を導入日一覧で再監査。**北斗の拳 天昇 / サラリーマン金太郎～MAX～ / 蒼穹のファフナーEXODUS** の3機を確認。北斗を処理済み、残り2機は未処理なので群はOPEN。

## No.1315 — パチスロ北斗の拳 天昇
- manufacturer: **タイヨーエレック（製造元） / サミー（発売・ブランド）**
- formalModel: **`Sパチスロ北斗の拳AB XR`**
- certificationNumber: **`9S0954`**
- releaseDate: **2019-11-05**
- generation/system: **6号機 / AT / CZ→激闘BONUS→高純増AT**
- payout: **97.9 / 99.0 / 100.1 / 105.4 / 110.1 / 114.0%**
- 激闘BONUS: **1/398.8 / 339.2 / 373.1 / 333.5 / 352.7 / 324.4**
- 真・天昇RUSH初当たり: **設定1 1/1103.3**。設定2〜6は当時主要資料が調査中のため未補完。
- base: **約50G/50枚**
- 純増: **約6.3枚/G**
- AT継続率: **約85%**
- AT平均獲得: **設定1〜5 約1,000枚 / 設定6 約800枚**
- 通常A最深部天井: **700G → 激闘BONUS**。AT確定天井ではない。

### resetBehavior v0.7 — No.1315
- 設定変更: **天井RESET / モード再抽選 / 昇舞魂RESET / 世紀末ポイントRESET / 非有利区間開始 / 有利区間ランプ消灯**。
- 据え置き: **液晶G数・天井進行・モード・昇舞魂・世紀末pt・有利区間をCARRY_OVER**。
- 純電源OFF→ON: **上記をCARRY_OVER**。開始ステージだけ当時資料で調査中のためUNVERIFIED。
- 朝一設定変更後は荒野ステージ。リセット後100Gは荒野滞在とする当時解析あり。
- 通常モード天井: **通常A 700G / 通常B 600G+前兆 / 通常C 400G+前兆 / チャンス 200G+前兆**。
- 有利区間継続時の天井短縮は設定変更恩恵ではない。前回当選Gに応じ **600G / 400G / 200G**へ短縮。
- 変更判別: **朝一液晶G数引継ぎ**と**有利区間ランプ**が主要材料。消灯＝変更濃厚、点灯＝据え置き濃厚。
- 公開朝一数値: 有利区間リセット後200G以内当選率 **約5%** の低設定中心実戦値あり。メーカー解析値ではないため `EMPIRICAL_MORNING_RATE` として分離。
- 設定変更時モード振り分け、本機固有ガックン条件/率は十分な再探索後も `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_EMPIRICAL_MORNING_RATE**。

## 2019-10-21群 — CLOSED
処理済み:
1. **闘魂継承 アントニオ猪木という名のパチスロ機** — No.1313。
2. **PYRAMID EYE（ピラミッドアイ）** — No.1314。

## 2019-11-05群 — OPEN
横断監査で確認済み候補:
1. **パチスロ北斗の拳 天昇** — No.1315 / 処理済み。
2. **パチスロ サラリーマン金太郎～MAX～** — 未処理。次候補No.1316。
3. **蒼穹のファフナーEXODUS** — 未処理。モゲスロ/2-9伝説では11/5群。別カレンダーで欠落するため個別導入日も次回再照合する。

監査根拠:
- モゲスロ2019導入日カレンダーは11/5を北斗 / サラ金MAX / ファフナーEXODUSの3機で掲載。
- 2-9伝説の2019年導入一覧も同じ3機を11/5で掲載。
- パチンコ・パチスロ.comの当時カレンダーは北斗とサラ金MAXを11/5掲載する一方、ファフナーEXODUSが欠落。群CLOSED前に個別資料で再照合必須。

## Sオリスロ2AA 系列 — 継続監査
1. SLOT WONDER AGENT — 2019-07-08 / No.1298 / 登録済み。
2. BELLE CITY — 2019-08-05 / No.1299 / 登録済み。
3. 花娘 — 2019-08-19 / No.1300 / 登録済み。
4. どき！すろ — 2019-08-19 / No.1301 / 登録済み。
5. タマどき！ — 2019-10-07 / No.1307 / 登録済み。
6. プレドキ！ — プレゴ専用PBまでは既調査で固定。P-WORLDは2019-12-02時点で機種DB掲載。具体導入日未固定のため未登録継続。時系列本線を止めない。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- retroQaScanConfirmedThrough: **`docs/real_machine_db/machines/2007-03_oedo-daisousasen.md`**
- latestFormalized: `docs/real_machine_db/machines/2007-02_skylove.md`
- latestFormalizedStatus: **PARTIAL_RESEARCH_EXHAUSTED**
- nextRetroQaAction: **Git追加順の次機種 `リングにかけろ1` を確認**。既QAなら重複編集せず次へ進み、resetBehavior欠損機を最初に正式補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1315 を再取得。
2. 保留 `プレドキ！` は具体導入日の確定資料のみ短く再監査し、未確定なら本線を止めない。
3. **No.1316候補 `パチスロ サラリーマン金太郎～MAX～`** を処理。
4. 続いて **`蒼穹のファフナーEXODUS`** の2019-11-05導入を個別一次/当時資料で再固定して処理。
5. 11/5群を全メーカー/別型式/別スペック/PB/地域差まで再監査し、CLOSED可否を判定。
6. 遡及QAは `リングにかけろ1` からGit追加順に継続。

## 主要出典 — 取得日 2026-09-11

### No.1315 パチスロ北斗の拳 天昇
- サミー公式発売告知: https://www.sammy.co.jp/japanese/news/2019/1321.html
- サミー マイスロ過去ニュース（2019-11-05ホール導入日）: https://new.sammy.co.jp/japanese/myslot/news/
- グリーンべると 型式試験適合/製造元: https://web-greenbelt.jp/00011462/
- Amusement Japan 展示会: https://amusement-japan.co.jp/article/detail/10001378/
- グリーンべると スペック: https://web-greenbelt.jp/00011496/
- HAZUSE: https://hazuse.com/machine/pachislot/9S0954/
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/3415/1/75541
- K-Navi: https://p-kn.com/slot/3322/
- スロパチくえすと 天井/朝一: https://www.slopachi-quest.com/article/hokutotennshou-tennjou/
- おスロおパチおいでやす 朝一/有利区間: https://oslo-opachi.com/2019/09/11/hokutotensyou_tenjyou/
- 期待値見える化 リセット挙動: https://slotjin.com/slot/hokutotenshou-reset/

### 2019-11-05群監査
- モゲスロ2019導入日カレンダー: https://moge-site.com/new-slot2019
- 2-9伝説導入一覧: https://29den.com/newslot/
- パチンコ・パチスロ.com 2019カレンダー: https://pachinkopachisro.com/archives/52807194.html

### プレドキ！継続監査
- P-WORLD: https://www.p-world.co.jp/machine/database/9067
