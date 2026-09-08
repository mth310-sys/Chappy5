更新日: 2026-09-08

## 現在地点
- recordCount: **1012**
- latestRecordAdded: **パチスロ スーパー海物語 IN 沖縄2**（三洋物産 / SANYO）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-09-05_slot-super-sea-story-in-okinawa2.md`
- chronologicalFrontier: **2016-09-20**
- frontierLatestMachine: **乱嵐エイサー-30**（オーイズミ）
- schema: **resetBehavior v0.7**
- status: **2016-09-20_GROUP_OPEN / 2016-09-05_RETRO_GAP_FILLED**

## 今回の同期 / 境界監査
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1011 `2016-09-20_ranran-eisa-30.md` を再取得して開始。
- `INDEX.md` は19件時点の旧集約のため、README規定どおり `LATEST_HANDOFF.md` + 実レコード + 最新mainを進捗正本として使用。INDEX自体は不用意に1012件へ作り替えていない。
- 並行リレーにより前回handoff候補だった `天下布武3` はすでにNo.1009、`SLOT魔法少女まどか☆マギカ2` はNo.1010、`乱嵐エイサー-30` はNo.1011としてmain登録済みだったため重複登録せず最新地点へ同期。
- 最新handoffが最優先指定した09/05群遡及漏れ `パチスロ スーパー海物語 IN 沖縄2` を再探索し、未登録を確認後No.1012として追加。
- 遡及追加のため chronologicalFrontier は **2016-09-20** のまま維持。

## No.1012 — パチスロ スーパー海物語 IN 沖縄2
- manufacturer: **三洋物産 / SANYO**
- releaseDate: **2016-09-05**
- formalModelName: **パチスロスーパー海物語IN沖縄2KK**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / ノーマルAタイプ / リアルボーナス**
- recordStatus: **COMPLETE_CORE_WITH_PARTIAL_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割canonical: **97.5 / 98.6 / 100.2 / 102.6 / 107.0 / 110.9%**。
- 5号機クロニクル: **97.4 / 98.5 / 100.2 / 102.6 / 106.9 / 110.8%**。
- けんスロ: **97.50 / 98.70 / 100.30 / 102.70 / 107.10 / 110.90%**。小差は平均せずCONFLICT保持。
- BIG: **1/282.48 / 276.52 / 269.70 / 260.06 / 247.31 / 236.59**。
- REG: **1/354.25 / 343.12 / 324.44 / 300.62 / 257.00 / 236.59**。
- 合算: **1/157.16 / 153.12 / 147.27 / 139.44 / 126.03 / 118.30**。
- ベース: canonical **約34G/50枚**。別資料に **34.0〜36.1G/50枚**の設定差レンジがあり別定義保持。
- BIG: **約312枚** / REG: **104枚**。
- 通常ゲーム数天井: **なし**。
- RT/AT/ART等の付加出玉機能なし。

### resetBehavior v0.7
- 通常ゲーム数天井・AT/ARTゲーム数・通常時ゲーム数管理モードは非搭載のため、それらは **NOT_APPLICABLE**。
- K-Naviに本機固有の「設定変更後の挙動」解析項目の存在は確認できたが、現存検索結果から本文の具体契約を直接固定できず、成立済みボーナス/告知状態/演出選択状態等の特殊状態のみ **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き/純電源OFF→ONも、通常時天井・AT/ART状態はNOT_APPLICABLE。特殊状態の厳密契約はUNVERIFIED_AFTER_RESEARCH。
- 設定変更専用の短縮天井、朝一専用内部モード、公開された朝一初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 本機固有のガックン/初期出目/液晶/告知ランプによる変更判別は、機種名表記揺れ・型式KK・三洋/SANYO・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常時ベルやBIG中/終了画面は設定推測材料であり、朝一の変更判別とは分離。
- resetQaStatus: **PARTIAL_RESEARCH_EXHAUSTED**。

### data quality
- 導入日はK-Naviとちょんぼりすたが2016-09-05で一致。
- SANYO公式PVでメーカー/機種の公式存在を確認。
- 型式 `パチスロスーパー海物語IN沖縄2KK` は中古実機DBとホールデータ上の型式表記で照合。
- 性能コアはK-Navi、ちょんぼりすた、pacnk、けんスロ、5号機クロニクルで横断。機械割の小差はCONFLICTとして保持。
- reset本文を取得できない部分は一般的Aタイプ挙動から推測補完していない。

## 2016-09-20群 — OPEN
登録済み:
- **SLOT魔法少女まどか☆マギカ2**（メーシー）— No.1010
- **乱嵐エイサー-30**（オーイズミ）— No.1011

監査状況:
- 09/20日付検索、K-Navi、HAZUSE、当時新台関連記事を再確認。今回、上記2機種以外を2016-09-20全国導入本線として新たに固定できていない。
- ただし月次カレンダーの掲載漏れが既に乱嵐エイサー-30で確認されているため、09/20群はまだCLOSEDにしない。
- `ニューアイムジャグラーEX-KA` は2016年9月リリース・検定情報まで既確認。具体ホール導入日を公式/業界/当時解析/古DBで固定して時系列へ配置する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- ゴルゴ13のreset側は `PARTIAL_RESEARCH_EXHAUSTED` まで更新済み。
- 次は2006-03-27より後の既存未QAレコードを最新main実体から時系列で特定して継続。旧INDEXのファイル名から推測しない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1012を再取得。
2. **1012件 / chronologicalFrontier 2016-09-20 / 09/20群OPEN** を正本として継続。
3. **2016-09-20群の全メーカー横断監査**を継続し、同日未登録機があれば次の番号で追加。
4. 並行して `ニューアイムジャグラーEX-KA` の具体ホール導入日を公式/業界/当時解析/古DBで固定。09/20以前なら遡及漏れ、09/20以後なら本線順に配置。
5. 09/20群が閉じられたら09/21〜09/25境界監査→09/26群へ前進。
6. PARTIAL/UNVERIFIEDは検索語・資料系統を変えて再探索後のみ確定。競合は平均せずCONFLICT。
7. 遡及reset QAはゴルゴ13の次の既存未QAレコードから継続。

## 主要出典 — 取得日 2026-09-08
### No.1012 パチスロ スーパー海物語 IN 沖縄2
- SANYO公式PV: https://www.youtube.com/watch?v=b1YjB0SBRTc
- K-Navi: https://p-kn.com/slot/2572/
- ちょんぼりすた: https://chonborista.com/slot/sanyo-slot/23038/
- 5号機クロニクル: https://5goki.com/sanyo
- pacnk: https://pacnk.com/slot/tools/sh_umiokinawa2.html
- けんスロ: https://kenslo65536.com/kaiseki/umi-in-okinawa2.html
- 中一商事: https://www.nakaiti.com/html/sayo00077.html
- A-SLOT: https://www.a-slot.com/SHOP/sanyo26.html

### 09/20境界監査
- HAZUSE まどか☆マギカ2: https://hazuse.com/machine/pachislot/SX0136/
- K-Navi 3×3EYES（09/12確認）: https://p-kn.com/slot/2589/
