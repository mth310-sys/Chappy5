machineName: SLOTバジリスク～甲賀忍法帖～Ⅲ
manufacturer: エレコ / ユニバーサルエンターテインメント
releaseDate: 2016-11-28
recordNumber: 1025
generation: 5号機 / 5.5号機期
systemType: A+ART / 周期CZ / 自力継続型ART
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ユニバーサルエンターテインメントの2016-10-25発表会を報じたPiDEAは、エレコ製「SLOTバジリスク～甲賀忍法帖～Ⅲ」と明記。
- K-Navi、一撃、ちょんぼりすた、ALL7等で2016-11-28導入が一致。後年記事にも2016-11-28に全国ホールへ導入とあるためcanonicalは2016-11-28。
- 型式名・検定番号は「バジリスクIII/バジリスク3/ELECO/6S/検定番号/型式」等へ検索語を変えたが、今回直接固定できる高信頼資料を取得できず推測しない。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.5% |
| 2 | 99.8% |
| 3 | 102.0% |
| 4 | 104.0% |
| 5 | 107.1% |
| 6 | 110.1% |
- パチマガスロマガ、一撃、ちょんぼりすた、期待値見える化で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | 通常BC(黄/青BAR) | PBC(白BAR) | ボーナス合算(BC+PBC) | ART初当たり | ボーナス+ART合成 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/1024.0 | 1/32768.0 | 約1/993 | 1/376.8 | 1/273.1 |
| 2 | 1/993.0 | 1/32768.0 | 約1/964 | 1/363.0 | 1/263.7 |
| 3 | 1/963.8 | 1/32768.0 | 約1/936 | 1/356.9 | 1/258.4 |
| 4 | 1/936.2 | 1/32768.0 | 約1/910 | 1/312.1 | 1/232.4 |
| 5 | 1/910.2 | 1/32768.0 | 約1/886 | 1/316.2 | 1/233.0 |
| 6 | 1/840.2 | 1/32768.0 | 約1/819 | 1/256.2 | 1/195.2 |
- パチマガスロマガは通常BCとPBCを分離して掲載。一撃/ちょんぼりすた等の「BC」系列はPBCを含む実質ボーナス合算値に相当するため、定義差として分離しCONFLICT扱いしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_DEFINITION_NORMALIZATION

## baseGamesPer50
- 約37.6G/50枚。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「バジリスクタイム」: 約+1.7枚/G。
- ボーナス込みART区間の見かけ純増目安: 約2.0枚/Gとする資料あり。物差し用canonicalはART単体の約1.7枚/G。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout
- バジリスクチャンス: 平均約200枚（解析資料）。
- プレミアムバジリスクチャンス: 204枚掲載資料あり。
- ART「バジリスクタイム」: 1セット平均約35G。追想の刻10G以上＋争忍の刻で構成。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は1～256Gの周期管理でCZ「争忍チャレンジ」を抽選。周期到達までは前兆込み平均約100G、CZ抽選まで実質平均約80Gとする解析。
- 通常時内部状態は通常/高確。高確で周期到達時はCZ当選濃厚。
- 天井はART間1200GでCZ+ART当選。通常BCを挟んでも天井進捗はリセットされない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時はART間天井ゲーム数をRESET。
- 内部状態をRESET / 再抽選。
- RT状態をRESET。
- 液晶ステージは甲賀卍谷から開始。
- 設定変更専用の固定短縮天井は確認できない。

### carryOverBehavior
- 据え置き時はART間天井進捗を引き継ぐ。
- 内部状態・RT状態も引継ぎとする朝一比較資料を確認。

### powerCycleBehavior
- 電源OFF→ONのみではART間天井ゲーム数を引き継ぐ。
- 内部状態・RT状態も引き継ぐ。
- 液晶ステージは甲賀卍谷となり、見た目だけでは設定変更と純電断を区別できない。

### gameCounterReset
- SETTING_CHANGE: RESET。
- CARRYOVER / POWER_CYCLE_ONLY: CARRYOVER。
- 通常BC成立ではART間1200G天井のゲーム数はリセットされない。

### ceilingAfterReset
- 通常天井: ART間1200G消化でCZ+ART当選。
- 設定変更後も天井上限は1200Gで、公開されたリセット専用短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 通常時には周期モード1～3が存在するが、設定変更時の初期周期モード振り分けを直接示す公開数値は、検索語・資料系統変更後も今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き/純電断で周期関連の内部進捗をどこまで厳密に保持するかは、実機完全再現粒度へ踏み込まず、公開朝一比較で確認できる天井・内部状態・RT引継ぎまでをcanonicalとする。

### stateAfterReset
- 設定変更: 内部状態RESET / 再抽選。
- 据え置き / 純電断: 内部状態引継ぎ。
- 設定変更直後の通常/高確の具体的振り分け数値は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 固定短縮天井や設定変更専用の朝一高確率保証は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更により天井進捗・内部状態がリセットされるため、前日ハマリの宵越し価値は消える。

### resetPenalties
- 前日のART間天井進捗を失う。
- その他の設定変更固有の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 一部解析で設定変更時にリールガックンする場合ありと報告。ただしメーカー保証の確定契約ではないため `GACKUN_REPORTED_NOT_MANUFACTURER_GUARANTEE`。
- RT状態を利用した判別報告あり。設定変更時はBC終了後相当のRT状態から始まるとされ、ベルこぼし前に中段リプレイ揃いならリセット濃厚、上段リプレイ揃いなら据え置き濃厚という解析がある。これは解析上の判別材料として保持し、100%確定表現は避ける。
- 液晶遊技履歴は設定変更/通常電源OFF→ONだけではクリアされないとする解析があり、単純な履歴初期化は変更判別に使えない。

### numericResetData
- 設定変更専用のモード振り分け、短縮天井振り分け、朝一当選率等の比較可能な公開数値: `UNVERIFIED_AFTER_RESEARCH`。

## dataQualityNotes
- ボーナス確率は「通常BCのみ」と「PBCを含む総ボーナス」の定義差があるため、別系列に正規化して保存した。平均化しない。
- ART純増約1.7枚/Gと「ボーナス込み約2.0枚/G」も定義差のため分離。
- resetBehaviorは一撃の設定変更/電源OFF ON直接比較、複数解析サイトの朝一項目で照合。
- 周期モード全移行率や小役別状態移行は実機完全再現用のため収集対象外。

## conflicts
- NONE_CONFIRMED_ON_CORE_AFTER_DEFINITION_NORMALIZATION。

## missingFields
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- settingChange initial periodic-mode distribution: UNVERIFIED_AFTER_RESEARCH
- settingChange initial high/normal-state numeric distribution: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. PiDEA — 〝神ってる〟バジリスクシリーズ最新作を発表／ユニバーサル
   - https://www.pidea.jp/articles/%E3%80%9D%E7%A5%9E%E3%81%A3%E3%81%A6%E3%82%8B%E3%80%9F%E3%83%90%E3%82%B8%E3%83%AA%E3%82%B9%E3%82%AF%E3%82%B7%E3%83%AA%E3%83%BC%E3%82%BA%E6%9C%80%E6%96%B0%E4%BD%9C%E3%82%92%E7%99%BA%E8%A1%A8%EF%BC%8F%E3%83%A6%E3%83%8B%E3%83%90%E3%83%BC%E3%82%B5%E3%83%AB
2. K-Navi — SLOTバジリスク～甲賀忍法帖～Ⅲ
   - https://p-kn.com/slot/2651/
3. パチマガスロマガ — SLOTバジリスク～甲賀忍法帖～Ⅲ ボーナス確率 / ART初当たり / PAYOUT
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/99/h-1.php
4. 一撃 — SLOTバジリスク～甲賀忍法帖～Ⅲ 総合
   - https://1geki.jp/slot/s_basirisk3/
5. 一撃 — バジリスク3 天井・設定変更・電源OFF/ON
   - https://1geki.jp/slot/s_basirisk3/3/
6. 一撃 — 周期到達時のCZ抽選
   - https://1geki.jp/slot/s_basirisk3/46/
7. 一撃 — 通常時の状態移行
   - https://1geki.jp/slot/s_basirisk3/42/
8. ちょんぼりすた — バジリスク3 スロット｜天井・ゾーン・周期・設定判別・フリーズ・評価
   - https://chonborista.com/slot/universal-slot/27085/
9. 期待値見える化 — バジリスク3 天井期待値・ゾーン・狙い目・やめどき解析
   - https://slotjin.com/zone/basilisk3/
10. スロパチクエスト — バジリスク3 設定変更判別方法
   - https://www.slopachi-quest.com/article/bazirisk3-setttei/
11. ALL7 — 2016年11月導入予定一覧
   - https://www.all7.jp/plans/index/2016/11
12. HAZUSE — パチンコ・パチスロ新台カレンダー
   - https://hazuse.com/new-machine-calendar/newmachine-calendar/
