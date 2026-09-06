# 実機DB 最新リレー引継ぎ

更新日: 2026-09-07

## 現在地点

- recordCount: **832**
- latestRecordAdded: **パチスロ リング 呪いの7日間**（藤商事）— 2014-07-22
- latestRecord: `docs/real_machine_db/machines/2014-07-22_pachislot-ring-noroi-no-nanokakan.md`
- chronologicalFrontier: **2014-07-22**
- frontierLatestMachine: **パチスロ リング 呪いの7日間**
- schema: **resetBehavior v0.7**
- status: **2014-07-22_GROUP_OPEN**

## 今回の同期 / 正本確認

- 最新mainの `README.md`、`docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md`（v0.7）、`docs/real_machine_db/INDEX.md`、`docs/real_machine_db/LATEST_HANDOFF.md`、831件目 `2014-07-07_nyannyan-musume.md` を再読。
- INDEXは19件表記の旧集約状態のため、README規定どおり **LATEST_HANDOFF + 実レコード** を進捗正本として使用。
- 作業開始時の正本は **831件 / 2014-07-07 / 07-07_GROUP_CLOSED**。07-08〜07-21境界も直前handoffでCLOSED済みだったため、次の未処理 **2014-07-22「パチスロ リング 呪いの7日間」** から継続。

## 今回追加 — パチスロ リング 呪いの7日間

### identity / 性能コア

- manufacturer: **藤商事**。
- hall start: **2014-07-22**。
- formalModelName: **パチスロ リング ノロイノナノカカンFSB**。
- inspectionNumber: **4S0053**。
- generation/system: **5号機 / AT / 疑似ボーナス / CZ / ゲーム数解除 / 天井**。
- payoutRate: **97.2 / 98.6 / 100.6 / 104.1 / 107.2 / 113.2%**（藤商事公式）。
- 貞子BONUS: **1/242.8 / 232.7 / 218.5 / 196.4 / 182.6 / 159.7**。
- 呪縛RUSH: **1/573.6 / 550.2 / 517.1 / 464.9 / 433.1 / 379.0**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。
- netIncrease: **約3.0枚/G**。
- 貞子BONUS: **40G / 平均約120枚**。
- 呪縛RUSH: **1セット40G+α / 最大80%ループ**。
- CZ亡魂ZONE: **10G / 20G / 当選まで、期待度約35%**。
- モード別天井: **通常A 900G / 通常B 999G / 天国準備 400G / 天国 99G**。
- coreStatus: **COMPLETE_CORE**（baseは再探索済み欠損として明示）。

## resetBehavior v0.7

- settingChangeBehavior: **設定変更で天井G数クリア / G数RESET_CONFIRMED**。設定変更専用モード振り分けも存在。
- gameCounterReset: 設定変更 **RESET_CONFIRMED** / 据え置き **UNVERIFIED_AFTER_RESEARCH** / 純電断 **UNVERIFIED_AFTER_RESEARCH**。
- ceilingAfterReset: 固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。ただし設定変更後に約24%で天国選択、天国なら99G以内解除。
- modeAfterReset: **RESELECT_CONFIRMED**。設定変更時の通常A / 通常B / 天国準備 / 天国は、設定1: 43.90 / 28.00 / 4.50 / 23.60%、設定2: 40.60 / 22.00 / 12.50 / 24.90%、設定3: 48.00 / 25.00 / 4.00 / 23.00%、設定4: 38.00 / 23.00 / 15.00 / 24.00%、設定5: 45.30 / 25.00 / 5.00 / 24.70%、設定6: 45.60 / 20.00 / 10.50 / 23.90%。
- stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- carryOverBehavior: 純据え置きのG数/モード/状態/ATスルー回数は **UNVERIFIED_AFTER_RESEARCH**。
- powerCycleBehavior: 設定変更なし電源OFF→ONのG数/モード/状態/ATスルー回数は **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- resetBenefits: 設定変更時天国 **23.0〜24.9%**、天国準備 **4.0〜15.0%**。
- resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。
- resetDetection: 本機固有の高信頼ガックン/表示判別は **NONE_CONFIRMED_AFTER_RESEARCH**。
- publicMorningNumbers: 設定変更時4モード振り分け全設定分を保存。
- resetBehaviorQA: **PARTIAL**。

## safeguard / 再探索

- `パチスロ リング 呪いの7日間 / リング 呪いの7日間 / パチスロ リング ノロイノナノカカンFSB / 4S0053 / 藤商事` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 999G / 99G / モード / 天国準備 / 状態 / 高確 / ガックン / 50枚 / 1000円` を組み合わせて再探索。
- 藤商事公式、K-Navi、パチマガスロマガ旧攻略、HAZUSE、当時天井/モード解析、後年解析まとめ、当時アプリ発表資料を横断。
- パチンコ版リングや後継「リング 運命の秒刻」等を除外。
- 据え置き/純電断/設定変更時内部状態は一般5号機仕様から推定せずUNVERIFIED。

## 2014-07-22群

- 直前handoffで07-22群候補として **パチスロ リング 呪いの7日間 / みどりのマキバオー 届け!!日本一のゴールへ!! / ぱちスロ 必殺仕事人** の3機を確認済み。
- 今回は1機目リングを登録。したがって **2014-07-22_GROUP_OPEN** を維持。

## 遡及 resetBehavior QA

- 既存QAカーソルは `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md` のまま維持。
- 新規時系列収集を止めず、別QAリレーで順次補完する。
- 2015-06-08到達時の **吉宗～極～（ヨシムネH2A4 / 3S1093）** 正式量産版処理注意は維持。

## 次回再開地点

1. **recordCount 832 / chronologicalFrontier 2014-07-22 / 07-22_GROUP_OPEN** から開始。
2. 最新mainで README / mission / INDEX / LATEST_HANDOFF / 832件目を再確認。
3. 次の未処理は同日群 **2014-07-22「みどりのマキバオー 届け!!日本一のゴールへ!!」（オリンピア）**。
4. 続いて **「ぱちスロ 必殺仕事人」（京楽産業.）** を処理。
5. その後、他メーカー・当時カレンダー・業界資料で07-22群を再監査してCLOSED判定し、次の時系列境界へ進む。
6. 遡及QAは `docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md` から再開。

## 主要出典 — 取得日 2026-09-07

- 藤商事公式: `https://www.fujimarukun.co.jp/products/s_ring/`
- K-Navi機種ページ: `https://p-kn.com/slot/2090/`
- K-Navi モード移行率: `https://p-kn.com/slot/2090/50931/`
- HAZUSE: `https://hazuse.com/machine/pachislot/4S0053/`
- パチビー: `https://www.pachibee.jp/machines/index/214060006`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/fuji_slot/16/a.php`
- 真パチスロ備忘録: `https://sin-surobi.com/ring/5327/`
- クランキーセブン: `https://crankyseven.com/ring-pc.htm`
- ちょんぼりすた: `https://chonborista.com/slot/fuji-slot/3896/`
- ATPress: `https://www.atpress.ne.jp/news/49700`
