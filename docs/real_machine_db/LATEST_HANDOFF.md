更新日: 2026-09-08

## 現在地点
- recordCount: **999**
- latestRecordAdded: **パチスロ ルパン三世～消されたルパン～**（オリンピア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-08-01_lupin-the-third-kesareta-lupin.md`
- chronologicalFrontier: **2016-08-01**
- frontierLatestMachine: **パチスロ ルパン三世～消されたルパン～**（オリンピア）
- schema: **resetBehavior v0.7**
- status: **2016-08-01_GROUP_CLOSED_FOR_CURRENT_RESEARCH**

## 今回の同期 / 正本確認
- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.998 `2016-08-01_devil-may-cry-cross.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり **LATEST_HANDOFF + 実レコード + 最新main** を進捗正本として使用。
- 開始時点の正本は recordCount **998** / chronologicalFrontier **2016-08-01** / `2016-08-01_GROUP_OPEN`。
- 既存性能値はやり直さず、08/01群の次の未処理先頭 **パチスロ ルパン三世～消されたルパン～**から継続。

## No.999 — パチスロ ルパン三世～消されたルパン～
- manufacturer: **オリンピア**
- releaseDate canonical: **2016-08-01**
- formalModelName: **ルパン三世消されたルパン/B4**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- generation/system: **5号機 / 5.5号機期 / ART / 擬似ボーナス+ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_IDENTITY**

### performanceCore
- 機械割: **96.6 / 97.6 / 100.4 / 102.4 / 105.4 / 110.8%**。
- ART「ゴールデンタイム」初当たり: **1/350.6 / 335.4 / 347.9 / 304.2 / 330.0 / 282.0**。
- ベース: **約46.1～48.7G/50枚**。簡易資料の約46Gは丸め代表値として分離。
- ART/擬似ボーナス純増: **約2.0枚/G**。
- ルパンボーナス: **35G**、ART期待度約50%。雷雲モード: **20G**、ART期待度約20%。
- ART: **1セット約40G**、継続率70～100%（平均約80%表記）。
- ゲーム数天井: **499G or 999G**。499G選択率は設定1→6で **0.8 / 1.6 / 3.1 / 4.7 / 9.4 / 12.5%**。
- CZ「ウォンテッドチャンス」周期天井: **最大480G**。雷雲カウンターは100ptで雷雲モード突入抽選。

### resetBehavior v0.7
- 設定変更: **ゲーム数天井RESET / ウォンテッド周期RESET・再選択 / カウンターRESET**。
- 据え置き: **天井ゲーム数CARRYOVER / カウンターCARRYOVER**。内部状態詳細は `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: **天井ゲーム数CARRYOVER / カウンター内部値CARRYOVER**。ただし液晶表示は朝一0pt表記の解析があり、表示と内部値を分離。ステージは設定変更/純電断ともランダム。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更後ウォンテッド周期公開値: 1～32G 6.3%, 33～64G 6.3%, 65～96G 3.9%, 97～128G 25.0%, 129～160G 39.1%, 以後32G区間ごと最大480Gまで各2.0%。97～160Gだけで64.1%、1～160G丸め合算80.6%。
- 変更判別: 前日MB成立状態で閉店し、翌朝2G連続10枚払い出しなら **据え置き濃厚**という当時解析あり。確定的ガックン等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 一撃2016-10-12では設定変更/電源OFFONが「現在調査中」だったが、後続解析で上記マクロ契約が公開されたため `RESEARCH_MATURITY_RESET_2016_10_UNKNOWN_VS_LATER_ANALYSIS_RESOLVED` として履歴保持。

### missing / conflicts
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**。
- settingChange/carryOver/powerCycle の高確低確等内部状態詳細: **UNVERIFIED_AFTER_RESEARCH**。
- `RELEASE_MONTH_2016_07_VS_DATE_2016_08_01`: 一部中古DBは2016年7月。K-Navi・当時解析の具体日2016-08-01をcanonical。

## 2016-08-01群 — CLOSED_FOR_CURRENT_RESEARCH
- 登録済み: **セブンスビート / デビル メイ クライ クロス / パチスロ ルパン三世～消されたルパン～**。
- K-Navi当時導入情報、2016年8月新台カレンダー、ALL7月次一覧、当時店舗新台告知、メーカー/解析系統を横断再監査。
- 店舗告知には8/3導入としてバーサス等も混在するが、バーサスは本DBで2016-07-25 canonicalとしてNo.996登録済みで、店舗個別導入遅延を全国初導入日に再分類しない。
- 今回の監査では08/01全国初導入として追加すべき未登録本線候補を固定できなかったため、群を `CLOSED_FOR_CURRENT_RESEARCH` とする。

## 次境界
- HAZUSE 2016年カレンダー上、08/01の次の具体日ブロックは **2016-08-08**。
- 先行候補: **パチスロ メタルギア ソリッド スネークイーター（KPE）** / **乱嵐エイサー-30**。PiDEAの5号機設置期限一覧でも両機を2016-08-08として確認。
- 次回はまず **2016-08-02～08-07境界監査**を実施し、全国初導入の未登録機がなければCLOSED扱いとして08/08群へ進む。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-06_be-bop.md**
- retroQaNextInspection: **2006-03-27_kengou-musashi.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 前進キューを優先し、retro QA再開地点は変更していない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.999を再取得。
2. **999件 → 2016-08-02～08-07境界監査**。
3. 境界に未登録全国初導入機がなければ、**2016-08-08群**へ前進。
4. 08/08の先頭候補 **パチスロ メタルギア ソリッド スネークイーター（KPE）**をNo.1000候補として、型式/検定番号/実導入日/性能コア/resetBehavior v0.7を収集。
5. 続いて **乱嵐エイサー-30**等の同日候補をメーカー横断監査する。
6. PARTIAL/UNVERIFIEDは表記・検索語・資料系統変更後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.999 ルパン三世～消されたルパン～
- K-Navi: https://p-kn.com/slot/2529/
- パチスロ新台速報 / pachislo-data: https://pachislo-data.com/olympia/25400
- 期待値見える化: https://slotjin.com/zone/kesaretarupin/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_k_lupin/3/
- 一撃 設定判別: https://1geki.jp/slot/s_k_lupin/5/
- すろぱちくえすと: https://www.slopachi-quest.com/kisyubetsu/rupin-kesareta/
- CrankySeven: https://crankyseven.com/lupin-kesareta-pc.htm
- パチマ: https://www.pachima.com/c/slot/s_22olympiak/S00179
- pachinko's blog: https://pachinko.hatenablog.jp/entry/2016/08/kesareta-lupin

### 08/01群監査 / 次境界
- HAZUSE新台カレンダー: https://hazuse.com/new-machine-calendar/newmachine-calendar/
- ALL7 2016年8月導入予定: https://www.all7.jp/plans/index/2016/08
- PiDEA X 5号機設置期限一覧: https://www.pidea.jp/articles/1620982702
