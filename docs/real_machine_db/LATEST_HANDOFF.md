更新日: 2026-09-12

## 現在地点
- recordCount: **1400**
- latestRecordAdded: **ミスタートリプルクラウン — No.1400**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-03-08_mister-triple-crown.md`
- chronologicalFrontier: **2021-03-08**
- frontierLatestMachine: **ミスタートリプルクラウン — No.1400**
- schema: **resetBehavior v0.7**
- status: **2021-03-08_GROUP_CLOSED_6_OF_6_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコードNo.1399を再取得して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新handoffとmain実レコードを正本として進捗判定。
- 開始時点の最新mainはNo.1399「ワンチャンス1000」、固定キュー残りは沖縄地域流通の **No.1400候補「ミスタートリプルクラウン」** 1機のみ。
- No.1400を追加し、性能コア + resetBehavior v0.7を同時収集。
- 全国系カレンダーでは2021-03-08は5機だが、HAZUSE/P-WORLD/パチマガスロマガ等から沖縄地域流通の本機を回収し、全機種方針上6機目として独立登録。
- 導入日はHAZUSE・でちゃう等の2021-03-08をcanonicalとし、後年回顧資料の2021-03-11を地域差/実稼働差候補としてCONFLICT保持。
- 2021年3月カレンダーを再監査し、全国系では3/8の次のパチスロ新台群が3/22「絶対衝激Ⅲ」であることを確認。3/8群は既知6機を処理済みとしてCLOSED。
- 遡及resetBehavior QAは本線を優先し、カーソルを動かしていない。

## No.1400 — ミスタートリプルクラウン
- path: `docs/real_machine_db/machines/2021-03-08_mister-triple-crown.md`
- manufacturer: **清龍ゲームジャパン**
- formalModel: **SトリプルクラウンDX-30**
- certificationNumber: **0S1341**
- releaseDate: **2021-03-08 canonical / 2021-03-11 retrospective conflict**
- distribution: **沖縄地域流通 / 30Φ**
- generation/system: **6号機 / ノーマルA / 完全告知 / リアルボーナス**
- payoutRateBySetting: **97.4 / 98.9 / 100.6 / 102.7 / 104.8 / 107.3%**
- BIG: **1/284.94 / 273.07 / 262.14 / 252.02 / 242.73 / 234.06**
- REG: **1/397.19 / 378.82 / 360.09 / 336.08 / 327.68 / 312.08**
- 合算: **1/165.91 / 158.68 / 151.70 / 144.03 / 139.44 / 133.75**
- baseGamesPer50: **約45.5G/50枚〜（ANALYSIS_SINGLE）**
- basicPayout: **BIG最大229枚 / REG最大89枚**
- netIncrease: **NOT_APPLICABLE（リアルボーナスのみ）**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_RESEARCH_EXHAUSTED_NO_RESET_SPECIFIC_PUBLIC_CONTRACT**

### resetBehavior v0.7 — No.1400
- 天井機能非搭載。したがって内部天井G、リセット短縮天井は `NOT_APPLICABLE`。
- AT/CZ/周期/規定G数モードを持たないノーマル機のため、それらの設定変更RESET/CARRY_OVERも `NOT_APPLICABLE`。
- 設定変更時の本機固有挙動、据え置き時に持ち越される朝一狙い対象の内部状態、純電源OFF→ON時の成立ボーナス等の機種固有契約は、機種名・型式・メーカー・シリーズ名に設定変更/リセット/朝一/据え置き/電源ON OFF/ガックン/有利区間等を組み合わせて再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 公開ゲームフローにAT/CZ・有利区間を用いる構造はなく、朝一有利区間ランプ判別資料もなし。v0.7の有利区間項目は `NOT_APPLICABLE_AS_PUBLIC_GAMEPLAY_CONTRACT`。
- 設定変更専用の高確/モード/短縮/特定G当選率/定量恩恵・不利は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン条件/発生率、初期出目・ランプ状態による変更判別は `UNVERIFIED_AFTER_RESEARCH`。
- バットランプは通常時のボーナス告知であり、設定変更判別用ランプとして扱わない。

## 2021-03-08群 — CLOSED
固定キュー:
1. **パチスロ北斗の拳 宿命 — No.1395 / DONE**
2. **パチスロ青の祓魔師 — No.1396 / DONE**
3. **パチスロラブ嬢2プラス — No.1397 / DONE**
4. **パチスロ アイドルマスター ミリオンライブ！ — No.1398 / DONE**
5. **ワンチャンス1000 — No.1399 / DONE**
6. **ミスタートリプルクラウン（SトリプルクラウンDX-30 / 沖縄地域流通） — No.1400 / DONE**

- 1geki 2021年3月カレンダーでは3/8に全国系パチスロ5機、次の全国系パチスロは3/22「絶対衝激Ⅲ」。
- 全国カレンダーから漏れる地域機を別監査し、ミスタートリプルクラウンを6機目として回収済み。
- 型式、メーカー表記、沖縄地域差、導入日3/8・3/11差を確認し、重複レコードは作らずNo.1400内にCONFLICT保持。
- status: **2021-03-08_GROUP_CLOSED_6_OF_6_KNOWN_PROCESSED**。

## 次回本線の再開地点
- 最新main再同期後、**2021-03-09〜2021-03-21境界を短く再確認 → 2021-03-22群**へ進む。
- 現時点の次機種は **「絶対衝激Ⅲ」＝No.1401候補**。
- 1geki・イチカツ・すろぱちくえすとで2021-03-22導入を確認。次回は型式/検定/同日地域機・PB・延期差も再監査して固定キュー化する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_sashiba-e30.md`（SASHIBA / サシバE-30）。
- SASHIBAは性能側 `coreStatus: PARTIAL` を維持し、reset側のみ `PARTIAL_RESEARCH_EXHAUSTED` へ正式化済み。
- 今回は本線を優先したためカーソル未移動。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_tokonatsu-aloha.md`（常夏アロハ）**。

## GitHub保存
- No.1400追加 commit: `5a29f184b50e50bd30b2080fc22ccf40e9442a10`
- handoff更新 commit: **THIS_COMMIT**

## 主要出典 — 取得日 2026-09-12
### No.1400 ミスタートリプルクラウン
- https://hazuse.com/machine/pachislot/1S0376/
- https://hazuse.com/machine/pachislot/1S0376/genre/201/
- https://www.p-world.co.jp/machine/database/9361
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/06/seiryu_slot_06.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/seiryu_slot/06/kh01.php
- https://news.p-world.co.jp/articles/16072/greenbelt
- https://www.dechau.com/machine/single.php?id=549
- https://cs62.cs-plaza.com/g/pachi/column/detail.php?mcl_cd=0276&mwr_cd=113&tac_cd=00110785&type=1
- https://prtimes.jp/main/html/rd/p/000000006.000178173.html
- https://ameblo.jp/sapporoslotschool/entry-12967102625.html

### 2021年3月境界監査
- https://1geki.jp/newmachinecalender/202103/
- https://ichikatsu.com/newslot/
- https://www.slopachi-quest.com/article/2021-dounyuukisyu/
- https://slothack.net/matome/23079/
