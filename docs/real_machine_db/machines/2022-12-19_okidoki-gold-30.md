# 沖ドキ！GOLD-30

recordNo: 1543
machineName: 沖ドキ！GOLD-30
manufacturer: ミズホ
formalModel: S／沖ドキ！GOLD／LS
inspectionCode: 2S1205
releaseDate: 2022-12-19
generation: 6.5号機 / 30Φメダル機
systemType: AT / 擬似ボーナス連チャンタイプ

## payoutRateBySetting
- 設定1: 97.2%
- 設定2: 98.7%
- 設定3: 101.3%
- 設定5: 104.7%
- 設定6: 108.1%
- 設定L: 搭載確認あり / 出玉率公開値は今回固定せず

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス初当たり
- 設定1: 1/299.6
- 設定2: 1/287.3
- 設定3: 1/266.7
- 設定5: 1/247.6
- 設定6: 1/237.0

### BIG / REGトータル
- 設定1: BIG 1/175.3 / REG 1/368.7
- 設定2: BIG 1/168.3 / REG 1/346.2
- 設定3: BIG 1/157.7 / REG 1/324.0
- 設定5: BIG 1/143.0 / REG 1/297.9
- 設定6: BIG 1/134.0 / REG 1/276.5

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 擬似ボーナスAT純増: 約3.0枚/G。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BIG: 70G、平均約210枚。
- REG: 30G、平均約90枚。
- 天国モード期待獲得枚数: 約1300枚。
- ドキドキモード: 約2000枚。
- 超ドキドキモード: 約2600枚。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時最大天井は999G+αでボーナス当選。
- モード別天井: 通常A/B 999G、引き戻し/チャンス 200G、天国/ドキドキ/超ドキドキ/保証/金ドキ 32G。
- 設定変更時は通常A / 通常B / チャンスへ再抽選。
- 設定変更時モード振り分け: 通常A 50.8% / 通常B 9.4% / チャンス 39.8%。
- 設定変更時に通常A/Bが選択された場合、25.0%で規定G数399Gへ短縮。
- 30Φ版は25Φ版と基本性能が共通だが、別型式 `S／沖ドキ！GOLD／LS`・ミズホ名義のため独立レコードとする。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_POWER_CYCLE_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間・天井 / 内部ゲーム数・内部モードをRESET / 再抽選。
- 朝一は通常A / 通常B / チャンスから選択。

### carryOverBehavior
- 据え置き時は天井進行・内部モード・有利区間をCARRY_OVERする解析で扱われる。

### powerCycleBehavior
- 純電源OFF→ONだけの場合の30Φ型式固有の直接記述は、`沖ドキ！GOLD-30 / S／沖ドキ！GOLD／LS / ミズホ / 30Φ` と `電源OFF ON / 電断 / 据え置き / リセット / モード / 天井 / 有利区間` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 25Φ版の契約をそのまま転記しない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: UNVERIFIED_AFTER_RESEARCH（30Φ固有直接資料）。
- 通常A/B最大天井999G、引き戻し/チャンス200G、連チャン系32G。

### ceilingAfterReset
- 設定変更で既存天井進行はRESET。
- 設定変更時39.8%でチャンスモードへ移行し200G天井。
- 通常A/B選択時でも25.0%で規定G数399Gへ短縮。
- 非短縮の通常A/Bは999G天井契約。

### modeAfterReset
- 設定変更: RESET / 再抽選。
- 設定変更時: 通常A 50.8% / 通常B 9.4% / チャンス 39.8%。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: UNVERIFIED_AFTER_RESEARCH（30Φ固有直接資料）。

### stateAfterReset
- 朝一客AIに必要な主要内部状態はモード管理として記録。
- モードとは別の独立状態について設定変更時専用公開振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 30Φ固有の直接記述は `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプを用いた本機固有の変更判別契約は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetBenefits
- 設定変更時39.8%でチャンスモード（天井200G）。
- 通常A/B選択時でも25.0%で規定G数399Gへ短縮。
- 朝一200G / 400G付近の当選分布はリセット推測材料になり得る。

### resetPenalties
- 設定変更で前日の天井進行と内部モードを失う。
- 前日通常B等の期待度が高い状態でも保持されない。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一200G / 400G付近の当選分布は店単位の設定変更推測材料。
- 単独台の早当たりだけでは自力当選を排除できないため設定変更確定材料とはしない。
- 本機固有のリールガックン条件 / 発生率は正式型式・メーカー・30Φを含め検索語を変え、解析サイト・旧DB・回顧資料まで再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時モード: 通常A 50.8% / 通常B 9.4% / チャンス 39.8%。
- 設定変更時チャンスモード天井: 200G。
- 設定変更時、通常A/B選択時399G短縮抽選: 25.0%。
- 通常A/B通常天井: 999G+α。
- 引き戻し/チャンス: 200G。
- 天国/ドキドキ/超ドキドキ/保証/金ドキ: 32G。

### publicMorningNumbers
- 通常A 50.8% / 通常B 9.4% / チャンス39.8%。
- 通常A/B選択時399G短縮: 25.0%。
- チャンスモード天井: 200G。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `沖ドキ！GOLD-30 / 沖ドキGOLD30 / S／沖ドキ！GOLD／LS / ミズホ / 30Φ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井短縮 / モード / ガックン / 有利区間` を組み替えて検索。
- HAZUSEの30Φ固有DB、1gekiの30Φ固有解析、Pachinavi、検定通過記事、導入カレンダーを横断。
- 25Φと共通する性能値は30Φ固有ページでも照合できた値だけ採用。

## conflicts
- 25Φ `S／沖ドキ！GOLD／GS` はユニバーサルブロス、30Φ `S／沖ドキ！GOLD／LS` はミズホ。性能共通でも別型式・別メーカー名義なので統合しない。
- 一部後年整理サイトがメーカーを「ユニバーサル」等と総称するが、型式固有DB・検定通過資料ではミズホ。canonicalはミズホ。

## sources
取得日: 2026-09-13

- HAZUSE 沖ドキ！GOLD-30: https://hazuse.com/machine/pachislot/2S1205/
  - 30Φ固有。型式 `S／沖ドキ！GOLD／LS`、検定番号 `2S1205`、メーカー ミズホ、導入日2022-12-19。
- HAZUSE AT/ART: https://hazuse.com/machine/pachislot/2S1205/genre/209/
  - 設定変更時モード振り分け、内部状態関連解析の30Φ固有ページ。
- p-media 検定通過整理: https://p-media.info/post-29995/
  - `S／沖ドキ！GOLD／LS` をミズホ名義の別スペックとして確認。25ΦGSとの区別。
- 1geki 通常時モード: https://1geki.jp/slot/s_okidoki_gold_30/42/
  - 30Φ固有のモード別天井、リセット時モード移行。
- 1geki 設定判別: https://1geki.jp/slot/s_okidoki_gold_30/0/
  - 設定別BIG/REG/初当たり、朝一ポイント。
- Pachinavi 沖ドキ！GOLD-30: https://pachinavi.net/machines/okidoki-gold-30/
  - 設定別機械割・初当たり、BIG/REG、天井、設定変更時50.8/9.4/39.8%、399G短縮25.0%。
- ALL7 2022年12月新台一覧: https://www.all7.jp/plans/index/2022/12
  - 2022-12-19、沖ドキ！GOLD-30 ミズホを独立掲載。

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_POWER_CYCLE_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
confidence: HIGH core / HIGH reset numeric / INDUSTRY formalModel+manufacturer+inspectionCode / power-cycle and gackun UNVERIFIED_AFTER_RESEARCH
