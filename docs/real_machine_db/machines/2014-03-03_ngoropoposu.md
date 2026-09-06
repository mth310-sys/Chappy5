# ンゴロポポス ～ピンチ！捕われの爺～

machineName: ンゴロポポス ～ピンチ！捕われの爺～
aliases: ンゴロポポス / ンゴロポポス～ピンチ!捕われの爺～
manufacturer: 大都技研
releaseDate: 2014-03-03
releaseDatePrecision: exact_hall_start_multi_source

generation: 5号機
systemType: ART / 規定ゲーム数管理 / ループテーブル / セット数上乗せ
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED

## identity

- K-Naviでホール導入開始 **2014-03-03** を確認。
- グリーンべるとの2014-02-04業界記事では **2014-03-02から納品** と記載。納品日とホール導入開始日は別定義として保持する。
- 型式名 / 検定番号は、機種名・表記揺れ・メーカー名・「型式」「検定番号」「3S」等で再探索したが今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_DATE / INDUSTRY_FOR_SHIPMENT

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.3% |
| 2 | 98.6% |
| 3 | 100.3% |
| 4 | 103.7% |
| 5 | 107.8% |
| 6 | 113.4% |

- 2014年当時スロパチクエスト、後年整理DB 2-9伝説で同系列を確認。PV転載資料でも設定1 96.3%～設定6 113.4%を確認。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「ンゴロポCHANCE」初当たり

| 設定 | ART初当たり |
|---|---:|
| 1 | 1/509.2 |
| 2 | 1/467.3 |
| 3 | 1/434.6 |
| 4 | 1/382.1 |
| 5 | 1/342.1 |
| 6 | 1/303.5 |

- K-Navi、2014年当時スロパチクエスト、後年整理DBで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約21G/1000円**。
- 20円パチスロの1000円=50枚投入相当として、本DB比較値は **約21G/50枚相当** とする。
- 2014年当時スロパチクエスト、および当時スペック紹介資料で同値を確認。
- confidence: PERIOD_ANALYSIS_MULTI_SOURCE

## netIncrease

- ART「ンゴロポCHANCE」: **約2.8枚/G**。
- 1セット **100G+α**。
- グリーンべると業界記事、K-Navi、パチマガスロマガ、P-WORLDで一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout

- ART「ンゴロポCHANCE」: **1セット100G+α × 純増約2.8枚/G**。
- 単純計算上100G区間の純増目安は約280枚だが、これはART中の純増レート×基本G数からの比較用目安であり、保証獲得枚数としては扱わない。
- ARTはループテーブル管理に加え、セット数上乗せとゲーム数巻き戻し「チキ戻し」を搭載。

## modeSpecificMinimumData

- 通常モード: **通常A / 通常B / 通常C / 天国**。
- 主なART当選契機: 規定ゲーム数 / レア小役直撃 / 小役連 / チキ図柄揃い。
- 通常Aは偶数百G付近、通常Bは奇数百G付近、通常Cは200G以降広範囲に解除振り分け、天国は100G以内が中心となる解析。
- 天国モードは解析上 **68G+最大前兆42G = 110G以内**にART当選とする資料がある。P-WORLDは「天国モードなら100GでART確定」と表現しており、規定Gと前兆込み表現を混同しない。

## ceiling

- 通常最大天井: **ART間999G+前兆**。
- P-WORLDも通常モード999G+前兆、天国モード100Gと掲載。
- 最大天井到達時はART確定。高継続テーブル選択率が上がる解析あり。
- 最大前兆を **42G** とする解析資料があるため、実発動は999Gを超える場合がある。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__G_RESET_MODE_RESET_NUMERIC_MODE_DATA_CONFIRMED
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は **ハマリ/天井ゲーム数RESET**。
- 当時解析で **モード・状態を再抽選** とする資料を確認。
- 設定変更後のモード振り分けは設定差があり、確認できた公開値を `publicMorningNumbers` に保存する。
- confidence: PERIOD_ANALYSIS_MULTI_SOURCE

### carryOverBehavior

- 据え置き時の内部ゲーム数について、2014年当時の実戦解析で **朝一前兆発生位置が内部ゲーム数依存** と観測され、前日G数との合算で前兆位置が一致する据え置き判別運用が報告されている。
- よって **GAME_COUNTER_CARRYOVER_SUPPORTED_BY_PERIOD_OBSERVATION** とする。
- ただしメーカー仕様書による直接契約ではなく、モード/内部状態まで一括してKEEPと断定しない。
- 据え置き時のモード・状態保持契約: **UNVERIFIED_AFTER_RESEARCH**。
- confidence: PERIOD_OBSERVATIONAL

### powerCycleBehavior

- 設定変更なしの単純な電源OFF→ONについて、天井G・モード・状態を本機固有で直接比較した資料を、表記・検索語・資料系統を変えて再探索したが固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset

- 設定変更: **RESET_CONFIRMED**。
- 据え置き: **CARRYOVER_SUPPORTED_BY_PERIOD_OBSERVATION**。
- 電源OFF→ONのみ: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更で天井進捗はリセットされる。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- リセット後も選択モードに応じた規定G数管理。本機では設定変更時に天国が選択される公開振り分けがあり、結果として一部は早い当選が期待できるが、固定天井短縮とは分離する。

### modeAfterReset

- 設定変更時はモード再抽選。
- 後年整理DBで、設定変更時の公開値として少なくとも以下を確認:
  - 設定1: **通常A 87.5% / 天国 12.5%**。
  - 設定6: **通常A 72.5% / 天国 27.5%**。
- 設定2～5の具体的振り分けは、今回安全に固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 通常B/Cへの設定変更直後振り分けは、上記設定1/6表では0%表記。
- confidence: ANALYSIS_MULTI_SOURCE_FOR_SETTING1_6_TABLE

### stateAfterReset

- 当時解析に **設定変更で状態再抽選** の記載あり。
- 具体的な低確/高確等の初期振り分け率は **UNVERIFIED_AFTER_RESEARCH**。
- confidence: PERIOD_ANALYSIS_FOR_RESELECTION / UNVERIFIED_FOR_NUMERIC_TABLE

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。
- 2014年導入の5号機ART機で、後年の有利区間概念は非該当。

### resetBenefits

- 設定変更後はモード再抽選され、公開値では天国スタートが **設定1 12.5% / 設定6 27.5%**。
- 天国は規定Gが浅いため朝一当選期待に影響する。
- ただし「全設定でリセットが強い」「固定短縮天井」とは扱わない。

### resetPenalties

- 設定変更で前日の天井進捗が消滅するため、前日深ハマリ台では宵越し価値を失う。
- その他の設定変更専用ペナルティ: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 当時実戦解析では **前兆発生位置が内部G数依存** とされ、前日G数を把握している場合、200G/400G等の前兆タイミングから設定変更/据え置きを推測できる。
- 例として、前日50G・当日200G台で前兆なら変更寄り、前日50G・当日350G付近で前兆なら据え置き寄りという運用例が示されている。
- これは確定判別ではなく **PERIOD_OBSERVATIONAL_CHANGE_INFERENCE**。
- ガックン、初期出目、固定ステージ等による本機固有の高信頼変更判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- 設定変更時モード振り分け・設定1: **通常A 87.5% / 天国 12.5%**。
- 設定変更時モード振り分け・設定6: **通常A 72.5% / 天国 27.5%**。
- 設定2～5: **UNVERIFIED_AFTER_RESEARCH**。
- 天国: 規定G数上は100G級。資料により「100G確定」と「68G+最大42G前兆で110G以内」の表現差があるため、規定Gと前兆込みを分離保持。
- 設定変更専用固定短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。

## conflicts / safeguards

- 「100GでART確定」と「68G+最大42G前兆で110G以内」は、規定ゲーム数と前兆込み実発動の定義差として分離し、平均しない。
- 神チキ揃いの確率について、約1/4000という合算的な紹介と、押し順不問フリーズ等の個別確率が存在するが、完全再現用詳細抽選は本DB対象外のため性能コアへ混入しない。
- 2014年本機と後年大都機のリセット仕様を混在させない。

## sources

取得日: **2026-09-06**

1. グリーンべると「100G×2.8枚の爽快感、Gスペック第2弾が登場」2014-02-04
   - https://web-greenbelt.jp/00000100/
   - 大都技研発表、ART100G、純増約2.8枚/G、納品2014-03-02から。
   - confidence: INDUSTRY

2. K-Navi「ンゴロポポス ～ピンチ！捕われの爺～」
   - https://p-kn.com/slot/2001/
   - ホール導入2014-03-03、設定別ART初当たり、ART100G×純増約2.8枚/G。
   - confidence: ANALYSIS_HIGH_DATABASE

3. パチマガスロマガ「ンゴロポポス～ピンチ!捕われの爺～」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/daitogiken_slot/56/daitogiken_slot_56.php
   - ART機、ART100G+α、純増約2.8枚/G、999G+前兆天井、内部モード/朝イチ設定変更解析項目。
   - confidence: ANALYSIS_HIGH

4. P-WORLD「ンゴロポポス～ピンチ!捕われの爺～」
   - https://www.p-world.co.jp/machine/database/7316
   - 5号機ART、BR非搭載、約2.8枚/G、100G+α、通常999G+前兆/天国100G。
   - confidence: DATABASE_HIGH

5. スロパチクエスト「ンゴロポポス 天井情報・狙い目・スペック解析攻略」2014-03-01/03-04
   - https://www.slopachi-quest.com/article/ngoropoposu/
   - ベース約21G/1000円、設定別ART初当たり、機械割、999G+前兆。
   - confidence: PERIOD_ANALYSIS

6. 期待値見える化「ンゴロポポス 天井・ゾーン狙い解析＆3817件実践値」2014-03-08
   - https://slotjin.com/zone/ngoropoposu/
   - 999G+最大前兆42G、設定変更で天井Gリセット、天国68G+最大前兆42Gの整理。
   - confidence: PERIOD_ANALYSIS

7. スロパチクエスト「ンゴロポポス モード別ゾーン期待度 天井・ゾーン・ヤメ時攻略」2014-03-12
   - https://www.slopachi-quest.com/article/ngoropopos-zone-mode/
   - 朝一前兆が内部G数依存という実戦観測、前日G数を利用した変更/据え置き推測。
   - confidence: PERIOD_OBSERVATIONAL

8. LackLuckLife「ンゴロポポス モード移行率解析 ヤメ時簡易考察」2014-03-15
   - https://l-l-life.com/36957058/
   - 設定変更時の設定1モードA87.5%/天国12.5%など。
   - confidence: PERIOD_ANALYSIS_SINGLE

9. 2-9伝説まとめ「ンゴロポポス ～ピンチ!捕われの爺～」
   - https://29den.com/ngoropoposu/
   - 機械割・初当たりの照合、設定変更で天井Gリセット、設定1/6の設定変更時モード振り分け。
   - confidence: RETROSPECTIVE_ANALYSIS

10. メタボ教授「ンゴロポポスは割詐称台でゾーン狙いも殆ど効果なし」2014-03-12
   - https://metabopro.com/ngopoposutorimu/
   - 設定変更でハマリGリセット、モード・状態再抽選。
   - confidence: PERIOD_SECONDARY

## missingFields

- 型式名 / 検定番号: UNVERIFIED_AFTER_RESEARCH
- 設定2～5の設定変更時モード振り分け: UNVERIFIED_AFTER_RESEARCH
- 据え置き時のモード/内部状態保持契約: UNVERIFIED_AFTER_RESEARCH
- 単純電源OFF→ON時の天井G/モード/状態: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の状態再抽選の具体的振り分け率: UNVERIFIED_AFTER_RESEARCH
- ガックン/初期出目等の確定変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- 天国の表現: P-WORLD「100GでART確定」 vs 解析資料「68G規定+最大42G前兆で110G以内」。定義差として分離保持し平均しない。
