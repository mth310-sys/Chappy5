更新日: 2026-09-13

## 現在地点
- recordCount: **1530**
- latestRecordAdded: **花火絶景 — No.1530**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-11-07_hanabi-zekkei.md`
- chronologicalFrontier: **2022-11-07**
- frontierLatestMachine: **花火絶景 — No.1530**
- schema: **resetBehavior v0.7**
- status: **2022-11-07_GROUP_OPEN_1_OF_4_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1529を確認して開始。
- INDEXは19件の旧表示のためREADME規定どおり最新handoffとmain実レコードを進捗正本として扱った。
- 前回handoff指定のNo.1530 `花火絶景` を性能コア + resetBehavior v0.7で追加。
- 型式は `S/ハナビゼッケイ/BH`、東京都公安委員会検定再掲の検定番号は `230127`。2S形式に推測変換しない。
- 設定変更時は内部の有利区間・天井・モード・内部状態・花火ポイントをRESETする一方、サブ液晶表示G数カウンタだけは引き継ぐ特殊仕様を複数解析で照合。表示G数と内部天井進行を分離して保存した。
- 据え置き / 純電源OFF→ONは内部天井・モード・状態・花火ポイント・有利区間をCARRY_OVER。
- 通常最大天井950G、周期天井10周期。設定変更専用の固定短縮天井や専用モード振り分け数値は再探索後も固定できずUNVERIFIED/NONE_CONFIRMED。
- 1周期目の大花火ステージ移行期待度50%は全設定共通の一般1周期目仕様であり、設定変更専用数値とは分離した。
- 旧解析の「設定変更後はボーナス終了後と同じ / 内部的に絶景チャレンジ抽選中の可能性」と、後年詳細解析の「設定変更時は絶景チャレンジ抽選中に突入しない」が競合。後年詳細解析をcanonical、旧記述を `CONFLICT_OLD_ANALYSIS_INTERPRETATION` として保持。
- 設定2 REGは主要資料1/556.6、一部業界講座1/556.3。多数一致の1/556.6をcanonical、1/556.3を転記/丸め競合として保持。
- 前handoffの遡及QAカーソル `ピカゴロウV-B` をmainで再確認したところ、すでに2026-09-11に `PARTIAL_RESEARCH_EXHAUSTED` までQA済みだったため重複更新は行わなかった。

## No.1530 — 花火絶景
- manufacturer: **ミズホ / ユニバーサルエンターテインメント**
- formalModel: **S/ハナビゼッケイ/BH**
- inspectionCode: **230127**
- releaseDate: **2022-11-07**
- generation/system: **6.2号機 / AT / 擬似ボーナス / 技術介入**
- 市場予測出玉率: **98.6 / 99.1 / 100.6 / 102.5 / 103.9 / 105.5%**
- 完全攻略: **101.1 / 101.5 / 103.1 / 105.1 / 106.6 / 108.3%**
- BIG: **1/439.5 / 434.9 / 419.1 / 399.4 / 386.7 / 372.0**
- REG: **1/565.1 / 556.6 / 526.3 / 510.1 / 488.5 / 475.0**
- 合算: **1/247.2 / 244.1 / 233.3 / 224.0 / 215.9 / 208.6**
- baseGamesPer50: **約35.1G/50枚**
- netIncrease: **約7.77枚/G**
- BIG平均約600枚 / REG平均約60枚
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_UNVERIFIED_RESET_SPECIFIC_MODE_NUMBERS**

### resetBehavior v0.7 — No.1530
- **設定変更**: 有利区間・内部天井・モード・内部状態・花火ポイントRESET。縁側ステージ開始。表示G数カウンタのみCARRY_OVER。
- **据え置き**: 有利区間・内部天井・モード・状態・花火ポイント・表示G数をCARRY_OVER。
- **純電源OFF→ON**: 据え置き同様に内部進行をCARRY_OVER。
- **天井**: 最大950G、周期10回。設定変更時は内部0から再スタートするが表示カウンタは継続するため朝一表示950G超が起こり得る。
- **モード**: 設定変更時再抽選、据え置き/純電断は引継ぎ。設定変更専用全振り分けは未固定。
- **有利区間**: 設定変更でRESET。通常時ランプ非点灯のためランプ判別不可。通常運用ではボーナス終了時にも原則RESET。
- **朝一恩恵**: 花火ポイントRESETにより1周期目から開始し、一般仕様として大花火ステージ移行期待度50%。固定短縮天井等は未確認。
- **変更判別**: 朝一表示だけでは困難。内部天井リセットのため表示950Gを超えて通常時なら設定変更濃厚。機種固有ガックンはUNVERIFIED_AFTER_RESEARCH。

## 2022-11-07群 — OPEN 1/4 known canonical
1. **花火絶景（ミズホ）** — No.1530 済
2. **ラストユートピア（ピーセカンド）** ← No.1531候補 / 次回最優先
3. **パチスロ幼女戦記（サミー）**
4. **パチスロ鉄拳4アルティメットデビルVer.（山佐ネクスト）**

4機処理後、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED可否を判定する。

## 遡及QA
- 前回指定 `docs/real_machine_db/machines/2007-03_pikagorou-v-b.md` はmain上ですでに2026-09-11 QA済みで `coreStatus: COMPLETE_CORE / resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED`。
- 次回は重複処理せず、ピカゴロウV-Bより後の時系列で最初の未QA/PARTIALレコードをmainから再探索してカーソルを進める。

## 今回の主要資料
### 花火絶景
- 遊技日本 発売発表: https://yugi-nippon.com/pachinko-new-machine/post-53544/
- 遊技日本 11/7導入: https://yugi-nippon.com/pachinko-new-machine/post-54687/
- PiDEA 東京都公安委員会検定情報: https://www.pidea.jp/articles/1661140582
- HAZUSE: https://hazuse.com/en/machine/pachislot/2S0127/
- K-Navi: https://p-kn.com/slot/3852/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/174207/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/444/12406/
- イチカツ: https://ichikatsu.com/hanabizekkei/
- 一撃 天井: https://1geki.jp/slot/s_hanabi_zekkei/3/
- 一撃 大花火ステージ: https://1geki.jp/slot/s_hanabi_zekkei/42/
- パチマガスロマガ旧DB 通常時モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/mizuho_slot/47/tj06-3.php
- スロット解析.com: https://slotkaiseki.com/hanabizekkei_tenjou/

## 次回再開地点
**本線はNo.1531候補 `ラストユートピア`（2022-11-07）から性能コア + resetBehavior v0.7を収集する。その後 `パチスロ幼女戦記` → `パチスロ鉄拳4アルティメットデビルVer.` を同じ11/7群として処理する。遡及QAはピカゴロウV-Bが既QA済みなので、その次の時系列未QAレコードをmainから再探索して進める。**