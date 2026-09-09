更新日: 2026-09-10

## 現在地点
- recordCount: **1150**
- latestRecordAdded: **パチスロ 闘え!サラリーマン**（ロデオ）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-19_tatakae-salaryman.md`
- chronologicalFrontier: **2017-09-19**
- frontierLatestMachine: **パチスロ 闘え!サラリーマン — No.1150**
- schema: **resetBehavior v0.7**
- status: **2017-09-19_GROUP_OPEN_ADDITIONAL_GAPS_FOUND**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1149「乱嵐エイサーver.100」を再取得して開始。
- INDEXは初期19件時点の旧スナップショット。README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時正本は **1149件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN**。
- 前handoff最優先の **「闘え!サラリーマン」** はGitHub code searchで既存レコードなしを確認。導入日・型式・性能コア・resetBehaviorを再探索し、**No.1150** としてmainへ追加。
- 9/19群CLOSED前の横断監査で **「トロピカルKISS ビターver. / スウィートver.」** の同日別スペック未登録候補を発見。群はCLOSEDにせず次回最優先へ送る。

## No.1150 — パチスロ 闘え!サラリーマン
- manufacturer: **ロデオ**
- releaseDate canonical: **2017-09-19**
- formalModelName: **闘え！サラリーマン／XA**
- certificationNumber: **7S0687**
- generation/system: **5号機（5.5号機世代） / A+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_BASE_AND_POWER_CYCLE**

### identity / release conflict
- フィールズ公式2017-07-11発売発表で製造元ロデオ、全国発売、2017年9月に各地ホールで遊技予定を確認。
- 鹿児島県公安委員会告示で型式 **闘え！サラリーマン／XA**、製造者ロデオ、検定番号 **7S0687** を一次確認。
- 楽スロ、ロデオ機種DB系は **2017-09-19**、2017-08-03公開の当時紹介動画も「2017年9月中旬より導入スタート」。一方、2017新台カレンダー1系統は **2017-09-04**。`CONFLICT_RELEASE_DATE_2017_09_19_VS_2017_09_04` を保持し、9/19をcanonical。

### 性能コア
- 機械割: **97.2 / 98.6 / 100.3 / 102.2 / 105.4 / 110.2%**。
- 赤7BIG: **1/528.52 / 524.29 / 508.03 / 504.12 / 481.88 / 464.79**。
- 宴BIG: **全設定1/16384.0**。
- ボーナス合算: **1/512.0 / 508.0 / 492.8 / 489.1 / 468.1 / 452.0**。
- ART初当たり: **1/358.9 / 342.7 / 326.2 / 299.6 / 281.3 / 259.1**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。50枚/1000円/ベース/コイン持ち/回転数、機種名・型式・ロデオ表記を変え、HAZUSE/DMM/P-WORLD/当時解析/回顧資料まで再探索したが比較可能実数を固定できず。
- ART純増: **約1.7枚/G**。
- 宴BIG: **約300枚**、BIG: **約200枚**。
- 通勤RUSH: **約36G〜約40G+α**。HAZUSE/DMMの勤務時間換算約36GとP-WORLD約40G+αは定義差として保持。

### resetBehavior v0.7
- 通常天井: **ART間3年=1095G**。ボーナスではART間日数をリセットしない。
- 設定変更時: **1年=365G または2年=730Gに必ず短縮**。
- 設定変更時天井振り分け: **365G 50.00% / 730G 50.00%**（全設定共通）。
- ステップモードとキャラモードを設定変更時に再抽選。
- ステップモード（設定1→6）:
  - 通常A: **62.50 / 56.25 / 41.41 / 35.16 / 22.66 / 16.41%**
  - 通常B: **25.00 / 25.00 / 33.59 / 33.59 / 39.84 / 39.84%**
  - 高確: **12.50 / 18.75 / 25.00 / 31.25 / 37.50 / 43.75%**
- キャラモード（設定1→6）:
  - 同僚: **66.02 / 65.23 / 62.11 / 57.03 / 52.34 / 45.31%**
  - 上司: **20.31 / 20.31 / 21.88 / 22.66 / 24.22 / 25.00%**
  - 後輩: **10.16 / 10.94 / 12.50 / 14.84 / 15.63 / 18.75%**
  - 嫁: **3.13 / 3.13 / 3.13 / 4.69 / 6.25 / 7.81%**
  - 社長: **0.39 / 0.39 / 0.39 / 0.78 / 1.56 / 3.13%**
- キャラモードは設定変更後 **30G（30日）転落なし**。早期ステップで上位キャラが出れば設定変更濃厚との解析があり、朝一変更判別材料として保存。
- 据え置きを独立条件としたART間日数/モードの直接契約: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- 純電源OFF→ON時のART間日数/モード引継ぎ直接契約: **UNVERIFIED_AFTER_RESEARCH**。一般5号機や他ロデオ機から推測しない。
- 本機固有の確定ガックン率/初期出目/電源OFFとの差: **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## 2017-09-19群 — OPEN
- 既存 No.1135〜No.1149に加え、今回 **闘え!サラリーマン No.1150** を追加。
- 導入日CONFLICTは各レコード内で保持し、時系列本線の重複登録はしない。

### CLOSED前の追加漏れ監査
- **トロピカルKISS ビターver. / スウィートver.**（ハイライツ・エンタテインメント）を未登録候補として発見。
- ちょんぼりすたは両スペックを **2017-09-19同時リリース**、約3,000台として扱う。全機種・別スペック方針上、性能差/型式差が確認できれば独立2レコード化する。
- 次回、P-WORLD / K-Navi / HAZUSE / 検定公報・検定DB / 当時解析を横断し、ビター/スウィートの型式名、検定番号、性能コア、resetBehaviorをそれぞれ固定する。
- 両スペック処理後、2017-09-19同日全メーカー・表記揺れ・地域導入差をもう一度横断監査。追加漏れがなければ **2017-09-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT** とし、次導入日群へ進む。

## 遡及 resetBehavior QA
- 最新カーソルは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md`（大江戸漫遊記）。
- retroQaScanConfirmedThrough: **2006-06_lord-of-the-rings.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 新規機種収集本線を止めず、別QAリレーで順次補完する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1150を再取得。
2. **1150件 / chronologicalFrontier 2017-09-19 / 9/19群OPEN_ADDITIONAL_GAPS_FOUND** を正本として継続。
3. 最優先は **トロピカルKISS ビターver. / スウィートver.** の別スペック同定。既存登録なしを再確認し、独立性能なら **No.1151 / No.1152候補**として順番にperformance core + resetBehavior v0.7を収集。
4. その後2017-09-19群を再度全メーカー横断監査し、漏れがなければCLOSED。
5. 群CLOSED後、次導入日群を複数カレンダーで決定して時系列前進。
6. 遡及QAは `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` から継続。

## 主要出典 — 取得日 2026-09-10
### No.1150 パチスロ 闘え!サラリーマン
- フィールズ公式発売発表: https://www.tsuburaya-fields.co.jp/ir/j/files/press/2017/press_20170711a.pdf
- 鹿児島県公安委員会告示: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1707/documents/60654_20170724145425-1.pdf
- HAZUSE: https://hazuse.com/machine/pachislot/7S0687/
- DMMぱちタウン: https://p-town.dmm.com/machines/2970
- P-WORLD: https://www.p-world.co.jp/machine/database/8477
- 楽スロ: https://rakuslo.com/tatakae_salaryman-tenjyo.html
- ロデオ機種DB系（9/19表記）: https://pachislo-data.com/category/rodeo
- 2017新台カレンダー（9/4競合）: https://slotnews777.blog.fc2.com/blog-entry-3121.html
- 当時紹介動画（2017-08-03公開、9月中旬導入表記）: https://www.youtube.com/watch?v=YeW1Ed5wqRo

### 次回 トロピカルKISS 先行監査
- ちょんぼりすた（ビター/スウィート2スペック、2017-09-19）: https://chonborista.com/slot/high-enter/45615/
