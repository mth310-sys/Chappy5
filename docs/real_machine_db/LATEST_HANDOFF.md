# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **784**
- latestMachineAddedByChronology: **パチスロ クイーンズブレイド2 玉座を継ぐ者 バトルバージョン**（JPS）
- latestRecord: `docs/real_machine_db/machines/2013-12-15_queens-blade2-battle-version.md`
- chronologicalFrontier: **2013-12-15（納品予定日基準）**
- schema: **resetBehavior v0.7**
- status: **CLOSED_TO_2013-12-15_DELIVERY_ANCHOR__NEXT_2013-12-16_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-12-02_jyuoh-oja-no-kikan.md` を再読。
- INDEXは旧集約状態（19件）のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 783 / chronologicalFrontier 2013-12-02 / 12-02群CLOSED。
- HANDOFF指定の次候補 **「パチスロ クイーンズブレイド2 玉座を継ぐ者 バトルバージョン」**を784件目として追加。
- 当時業界一次系統で **2013-12-15納品予定**を確認。ホール導入開始の具体日を別資料で直接固定できなかったため、12/15は delivery anchor として保持し、導入日と混同しない。
- その次は具体導入日が複数資料で確認できる **2013-12-16群**へ進む。

## 今回追加 — クイーンズブレイド2 玉座を継ぐ者 バトルバージョン

### identity / 性能コア

- manufacturer: **JPS / ジェイピーエス**。
- 8月版の追加スペックで、パチマガスロマガは「2013年12月・スペック違い」と明記。
- delivery anchor: **2013-12-15納品予定**（グリーンべると 2013-12-09）。
- generation/system: **5号機 / AT / BR非搭載 / CZ / ゲーム数管理 / 天井**。
- AT初当たり: **1/418.24 / 403.99 / 391.97 / 376.96 / 348.86 / 318.78**。
- 機械割: **96.80 / 98.20 / 99.58 / 102.24 / 106.39 / 110.69%**。
- AT「アルドラクエスト」: **40G or 100G+α / 純増約2.8枚/G**。
- AT間最大天井: **1088G**。
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**。8月版の約28～29Gをスペック違いへ自動転記しない。
- modelName / approvalNumber: **UNVERIFIED_AFTER_RESEARCH**。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_PARTIAL**。

### resetBehavior v0.7

- バトル版固有の設定変更/据え置き/電源OFF→ON契約は、表記「バトルバージョン / 闘」、朝一、リセット、天井、据え置き、電断等を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ベース版には「設定変更で天井Gリセット・モード/状態/液晶再抽選」という解析があるが、本機はAT初当たり・純増・機械割が異なる独立スペックのため1:1転記しない。
- ceilingAfterReset: **NONE_CONFIRMED_AFTER_RESEARCH**。
- modeAfterReset / stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- resetBenefits / resetPenalties / publicMorningNumbers / resetDetection: **NONE_CONFIRMED_AFTER_RESEARCH**。

## safeguards

- 8月ベース機の **AT初当たり1/266～1/201 / 純増2.5枚/G / 最大出玉率108.17%**を混入しない。
- バトル版は **AT初当たり1/418.24～1/318.78 / 純増2.8枚/G / 最大110.69%**。
- 2013-12-15は業界記事の **納品予定日**。ホール導入開始日と同義にしない。
- resetBehaviorは「基本システム同一」だけを根拠にベース版から転記しない。

## 12/16次群

具体導入日を確認済み:
- **SLOT魔法少女まどか☆マギカ**（メーシー） — K-Naviで2013-12-16ホール導入開始。
- **吉宗（2013年）**（大都技研） — K-Naviで2013-12-16ホール導入開始。

12/16群はまだOPEN。全メーカー横断監査を継続する。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線784件目を優先し、既存性能値の無駄な再調査はしていない。

## 次回再開地点

1. **recordCount 784 / chronologicalFrontier 2013-12-15 delivery anchor / 12-16群OPEN** から開始。
2. 次の未処理候補 **「SLOT魔法少女まどか☆マギカ」（メーシー、2013-12-16）** を性能コア + resetBehavior v0.7で処理。
3. 続けて **「吉宗（2013年）」（大都技研、2013-12-16）**。
4. 12/16同日群は全メーカー横断監査を行い、追加未登録機を確認してからCLOSED判定する。
5. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
6. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- グリーンべると QB2バトル版: `https://web-greenbelt.jp/00001249/`
- P-WORLD業界ニュース転載: `https://news.p-world.co.jp/articles/6242/greenbelt`
- P-WORLD QB2バトル版: `https://www.p-world.co.jp/machine/database/7259`
- パチマガスロマガ QB2闘: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/28/a.php`
- pacnk QB2バトル版: `https://pacnk.com/slot/tools/sh_queenzubureido2ouzabattle.html`
- パチ7 JPS回顧: `https://pachiseven.jp/articles/detail/11436`
- K-Navi まどか☆マギカ: `https://p-kn.com/slot/1980/`
- K-Navi 吉宗2013: `https://p-kn.com/slot/1960/`
