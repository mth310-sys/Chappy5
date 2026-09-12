# 沖ドキ！GOLD

recordNo: 1542
machineName: 沖ドキ！GOLD
manufacturer: ユニバーサルブロス
formalModel: S／沖ドキ！GOLD／GS
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-12-19
generation: 6.5号機 / 25Φメダル機
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

信頼度: INDUSTRY / ANALYSIS_HIGH

## netIncrease
- 擬似ボーナスAT純増: 約3.0枚/G。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- BIG: 70G、平均約210枚。
- REG: 30G、平均約90枚。
- 天国モード移行時期待獲得枚数: 約1300枚。
- ドキドキモード: 約2000枚。
- 超ドキドキモード: 約2600枚。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時の最大天井は999G+αでボーナス当選。
- モード別天井: 通常A/B 999G、引き戻し/チャンス 200G、天国/ドキドキ/超ドキドキ/保証/金ドキ 32G。
- 設定変更時は通常A / 通常B / チャンスのいずれかへ再抽選。
- 設定変更時モード振り分け: 通常A 50.8% / 通常B 9.4% / チャンス 39.8%。
- 非有利区間から有利区間へ移行し通常A/Bが選択された場合、規定G数を399Gへ短縮する抽選あり。設定変更時当選率25.0%。
- 有利区間は最大4000Gの6.5号機仕様。設定変更時、天国以上終了時、2400枚+α獲得時などにリセットされる解析。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_INSPECTION_CODE_AND_GACKUN
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井 / 内部ゲーム数RESET。
- 内部モードRESET / 再抽選。
- 朝一は通常A / 通常B / チャンスから選択される。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井 / 内部ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 前日進行中のモード・天井進行を前提に継続する。

### powerCycleBehavior
- 純電源OFF→ONのみの場合、有利区間CARRY_OVER。
- 天井 / 内部ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 設定変更を伴わない電断は据え置き系の契約として複数解析資料で一致。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常A/Bの最大天井は999G+α。
- 引き戻し/チャンスは200G、連チャン系モードは32G。

### ceilingAfterReset
- 設定変更で既存天井進行はRESET。
- 設定変更時にチャンスモードへ39.8%で移行し、この場合は200G天井。
- 通常A/Bが選択された場合でも25.0%で規定G数399Gへ短縮。
- したがって設定変更後は200Gまたは399Gに明確な朝一短縮契約が存在する一方、非当選時は通常A/Bの999G天井契約を使用。

### modeAfterReset
- 設定変更: RESET / 再抽選。
- 設定変更時: 通常A 50.8% / 通常B 9.4% / チャンス 39.8%。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### stateAfterReset
- 朝一客AIに必要な主要内部状態はモード管理として扱う。
- 設定変更時はモード再抽選、据え置き・純電断は内部モード引継ぎ。
- モードとは別の独立状態について設定変更時専用の公開振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間ランプ: 非搭載のため変更判別には使用不可。
- 設定変更時以外の有利区間リセット後は金ドキ移行抽選が存在するが、設定変更時の朝一モード振り分けとは分離して扱う。

### resetBenefits
- 設定変更時の39.8%でチャンスモード（天井200G）。
- 設定変更時、通常A/B選択時でも25.0%で規定G数399Gへ短縮。
- 朝一200G以内 / 400G付近の当選はリセット挙動として有効な観測材料になる。

### resetPenalties
- 設定変更で前日の天井進行と内部モードを失う。
- 前日通常Bなど高期待モードを保持していた場合、その状態は消える。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプは非搭載でランプ判別不可。
- 設定変更後は39.8%で200G天井のチャンスモード、通常A/B選択時の25%で399G短縮があるため、朝一200G/400G付近の当選分布は店単位のリセット推測材料になる。
- 単独台の200G以内当選は自力当選もあるため設定変更確定材料とはしない。
- 本機固有のリールガックン条件 / 発生率は `沖ドキ！GOLD / S沖ドキGOLDGS / S／沖ドキ！GOLD／GS / ユニバーサルブロス` と `設定変更 / リセット / 朝一 / 据え置き / ガックン / 電断 / 有利区間` を組み替え、当時解析・旧整理・回顧資料まで再探索したが直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時モード: 通常A 50.8% / 通常B 9.4% / チャンス 39.8%。
- 設定変更時チャンスモード: 天井200G。
- 設定変更時、通常A/B選択時の399G短縮抽選: 25.0%。
- 通常A/B通常天井: 999G+α。
- 引き戻し/チャンス通常天井: 200G。
- 天国/ドキドキ/超ドキドキ/保証/金ドキ: 32G。

### publicMorningNumbers
- チャンスモード移行率: 39.8%。
- 通常A移行率: 50.8%。
- 通常B移行率: 9.4%。
- 通常A/B選択時の399G天井短縮当選率: 25.0%。
- 朝一チャンスモード選択時天井: 200G。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `沖ドキ！GOLD / 沖ドキGOLD / S沖ドキGOLDGS / S／沖ドキ！GOLD／GS / ユニバーサルブロス / 25Φ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井短縮 / モード振り分け / ガックン / 有利区間` を組み替えて検索。
- GreenBeltの公安委員会検定記事、P-WORLD、PiDEA、HAZUSE 30Φ解析、当時攻略/解析、後年整理資料を横断。
- 25Φと30Φは型式・メーカー名義が別なので独立レコード化。性能値は25Φ/30Φ共通掲載資料と25Φ単独ページの一致を確認して採用。
- 検定番号は型式通過自体を業界一次系で確認したものの、番号を直接明記する資料を十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- 型式/メーカー: 25Φは `S／沖ドキ！GOLD／GS`（ユニバーサルブロス）、30Φは別型式・別メーカー名義。性能同一でもレコード統合しない。
- 設定Lは搭載確認あり。ただし出玉率の信頼できる公開値は今回固定しない。
- 一部解析は設定変更時モードを「通常A/B内訳調査中、チャンス39.8%」とするが、P-WORLDでは通常A 50.8% / 通常B 9.4% / チャンス39.8%を公開。定義競合ではなく解析更新差として、後発具体値をcanonical採用。

## sources
取得日: 2026-09-13

- GreenBelt「『S／沖ドキ！GOLD』などパチスロ4型式、パチンコ4型式が検定を通過」: https://web-greenbelt.jp/post-64523/
  - 新潟県公安委員会公示由来、25Φ型式 `S／沖ドキ！GOLD／GS`、ユニバーサルブロス名義を確認。
- P-WORLD 沖ドキ!GOLD: https://www.p-world.co.jp/machine/database/9738
  - 設定別初当り/BIG/REG、設定変更時モード50.8/9.4/39.8%、399G短縮25.0%。
- PiDEA X 2022年末新台資料: https://www.pidea.jp/articles/1666918803
  - 25Φ/30Φ共通の基本スペック、約32G/50枚、純増約3枚/G、初当り、出玉率、BIG/REG、天井。
- パチンコ・パチスロ.com 当時簡易資料: https://pachinkopachisro.com/archives/57039915.html
  - 25Φ `S／沖ドキ！GOLD／GS` と30Φ別型式を同時記載。
- p-media 検定通過整理: https://p-media.info/post-29995/
  - 25Φユニバーサルブロス型式と30Φミズホ別型式の区別確認。
- ちょんぼりすた / SLOT HACK: https://chonborista.com/slot/universal-slot/176479/ / https://slothack.net/matome/88602/
  - 2022-12-19、6.5号機、約32G/50枚、純増約3.0枚/G、天井999G、25/30Φ合算展開。
- パチスロメソッド: https://slotmethod.jp/archives/15910/
  - 設定変更=有利区間/天井/内部モードRESET、電源OFF→ON=各CARRY_OVER、チャンス39.8%、通常A/B時399G短縮25%。
- ぽこすろっと: https://www.nankaikoya.jp/okidoki-gold-kitaichi/
  - 設定変更/電源OFF→ONの天井・内部モード・有利区間契約、有利区間ランプ非搭載、朝一恩恵。
- スロットセブン: https://slot-seven.com/okidoki_gold-tenzyou/
  - 電源OFF→ON時の天井/内部状態引継ぎ、有利区間リセットタイミング、朝一恩恵。

## missingFields
- inspectionCode: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件 / 発生率: `UNVERIFIED_AFTER_RESEARCH`。

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_INSPECTION_CODE_AND_GACKUN
- confidence: HIGH core / HIGH reset core / INDUSTRY formalModel+manufacturer / inspectionCode and gackun UNVERIFIED_AFTER_RESEARCH
