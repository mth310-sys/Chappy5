# 実機DB 最新リレー引継ぎ

更新日: 2026-09-06

## 現在地点

- recordCount: **786**
- latestMachineAddedByChronology: **吉宗（2013年）**（大都技研）
- latestRecord: `docs/real_machine_db/machines/2013-12-16_yoshimune-2013.md`
- chronologicalFrontier: **2013-12-16**
- schema: **resetBehavior v0.7**
- status: **2013-12-16_GROUP_OPEN**

## 今回の同期 / 重要事項

- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前レコード `2013-12-16_slot-madoka-magica.md` を再読。
- INDEXは旧集約状態のためREADME規定どおり **LATEST_HANDOFF + 実レコード**を正本扱い。
- 作業開始時正本は recordCount 785 / chronologicalFrontier 2013-12-16 / 12-16群OPEN。
- HANDOFF指定の次候補 **「吉宗（2013年）」**を786件目として追加。
- P-WORLD / K-Navi / パチ7 / 当時導入資料 / 2013年当時攻略記事を横断し、性能コアとresetBehavior v0.7を収集。

## 今回追加 — 吉宗（2013年）

### identity / 性能コア

- manufacturer: **大都技研**。
- modelName: **吉宗A3**。
- hall start: **2013-12-16**（K-Navi / パチ7）。
- generation/system: **5号機 / 疑似ボーナス + AT / CZ / ゲーム数管理 / 天井**。
- 機械割: **97.19 / 98.97 / 100.88 / 104.41 / 108.52 / 113.85%**（P-WORLD）。
- 疑似ボーナス+AT合算: **1/172.3 / 165.1 / 162.2 / 144.9 / 133.6 / 116.9**（P-WORLD / K-Navi一致）。
- baseGamesPer50: **約31G/50枚**。当時導入前資料の「約31G/千円」を50枚換算。
- 疑似ボーナス / AT純増: **約2.8枚/G**。
- BIG: **200枚+α**、REG: **20G**。
- AT「爆走大盤振舞」: **1セット40G+α / 純増約2.8枚/G**。
- 天井: P-WORLDは擬似ボーナス後 **最大1036G**。当時資料の1000G表記は前兆込み/なしの定義を分離して保持。
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED**。

### resetBehavior v0.7

- 設定変更後は **モード再抽選**。K-Navi本機専用解析で直接確認。
- 設定変更時モード振り分け:
  - 設定1～3: 通常A **47.5%** / 通常B **37.5%** / 天国A **15.0%**。
  - 設定4～6: 通常A **45.6%** / 通常B **34.4%** / 天国A **20.0%**。
- 設定変更後は天国移行と通常モードの早い解除を加味し、**約20～30%で128Gまでのボーナス当選に期待**とK-Naviに明記。
- 当時2013-12-29攻略記事で **G数リセット＆モード再抽選（宵越し不可）**を確認。gameCounterResetは `CLEAR_SUPPORTED_CONTEMPORARY_SECONDARY`。
- パチ7も朝一狙い目を **128Gまで**としている。
- 純据え置き時の天井G/モード/状態、および設定変更を伴わない電源OFF→ON時の直接契約は、表記揺れ・型式・メーカー・据え置き/宵越し/電源ON OFF/電断/朝一を組み替えて再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の内部状態契約もモードと混同せず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。128G期待20～30%を「128G天井」とは扱わない。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN**。
- 朝一キャラアイコンは128G以内解除示唆として有用だが、据え置き/電断時の引継ぎ契約が固定できないため単独の設定変更確定判別とは扱わない。
- ガックン等の本機固有確定契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

## safeguards

- 4号機「吉宗」、2008年「新・吉宗」、2015年「吉宗 ～極～」、2020年「吉宗3」、2025年スマスロ「吉宗」、2026年「真打吉宗」の仕様を混入しない。
- 吉宗 ～極～のBIG320枚+α / AT80G+α等は本機へ転記しない。
- 後年機の有利区間・リセット天井・電源OFF→ON仕様は本機へ転記しない。
- 天井1000G / 最大1036Gは平均せず、前兆込み/なしの定義差として保持。

## 12/16同日群

処理済み:
- **SLOT魔法少女まどか☆マギカ**（メーシー） — 785件目。
- **吉宗（2013年）**（大都技研） — 786件目。

今回の一般検索では12/16の追加パチスロ確定候補を新たに固定できなかったが、全メーカー横断監査を完了したとはまだ判定せず **12/16群はOPEN維持**。

## 遡及resetBehavior QA 進捗

- QAカーソルは `2007-01_karate-baka-ichidai.md` の次の実ファイル順を維持。
- 今回は本線786件目を優先。既存性能coreStatusは変更なし。reset QAは性能完了判定とは別管理を維持。

## 次回再開地点

1. **recordCount 786 / chronologicalFrontier 2013-12-16 / 12-16群OPEN** から開始。
2. 2013-12-16同日群をメーカー公式/業界導入一覧/当時解析DB/古い新台カレンダーで横断監査し、未登録パチスロがなければ **12-16_GROUP_CLOSED**。
3. その後 **2013-12-17以降**の次の具体日アンカーを確定し、次の未処理機種へ進む。
4. 遡及QAは `2007-01_karate-baka-ichidai.md` 直後の実ファイル順で継続。
5. PARTIAL / UNVERIFIEDは公式・業界・当時解析・古いDB・アーカイブ・回顧資料まで系統を変えて再探索し、競合は平均せずCONFLICT保持。

## 主要出典 — 取得日 2026-09-06

- K-Navi 吉宗（2013年）: `https://p-kn.com/slot/1960/`
- K-Navi モード移行率（設定変更後）: `https://p-kn.com/slot/1960/47223/`
- P-WORLD 吉宗「2013年」: `https://www.p-world.co.jp/machine/database/7243`
- パチ7 朝一/狙い目: `https://pachiseven.jp/machines/3801/cutout/82`
- パチ7 初期投資/導入日: `https://pachiseven.jp/machines/3801/cutout/92`
- スロスター 当時導入前スペック: `https://ameblo.jp/slostar/entry-11640637411.html`
- 2013-12-29当時攻略記事: `https://slotmania.doorblog.jp/archives/yoshimune_tenjyo_kitaichi.html`
