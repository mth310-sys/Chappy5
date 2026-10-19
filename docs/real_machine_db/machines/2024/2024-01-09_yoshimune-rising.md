# 吉宗RISING

recordNo: 1616
machineName: 吉宗RISING
aliases: 吉宗ＲＩＳＩＮＧ / 吉宗ライジング / スマスロ吉宗RISING
manufacturer: サボハニ（製造） / 大都技研
formalModel: L吉宗ライジングSA2
inspectionCode: 3S0802
releaseDate: 2024-01-09
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス + 差枚数管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 遊技日本の発売発表で2024-01-09導入開始予定を確認。
- グリーンべるとの2024-01-09新台スケジュールにも同日導入として掲載。
- 主要解析でも2024-01-09で一致。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本および遊技通信系業界記事で製造元サボハニ、型式名 `L吉宗ライジングSA2` を確認。
- 長崎県遊技業協同組合掲載の遊技機関連情報でも型式名 `L吉宗RISING SA2` を確認。
- 検定番号 `3S0802` はAtivo掲載値。今回、公的検定原典そのものまでは到達できていないため検定番号のみ `ANALYSIS_SINGLE_FOR_INSPECTION_CODE` とする。
confidence: INDUSTRY_HIGH_FOR_MODEL / ANALYSIS_SINGLE_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- 1: 97.6%
- 2: 98.9%
- 3: 101.1%
- 4: 105.1%
- 5: 107.5%
- 6: 111.2%
initialHitBySetting:
- setting1: 初当たり 1/268.6 / AT 1/537.0
- setting2: 初当たり 1/261.9 / AT 1/521.2
- setting3: 初当たり 1/252.2 / AT 1/492.7
- setting4: 初当たり 1/234.3 / AT 1/437.4
- setting5: 初当たり 1/227.2 / AT 1/405.9
- setting6: 初当たり 1/216.8 / AT 1/377.9
baseGamesPer50: 約34G/50枚
netIncrease: 約4.0枚/G
basicPayout:
- 将軍ボーナス: 10G、純増約4.0枚/G
- AT「爆走大盤振舞」: 初期差枚数100枚以上
- AT終了後「八代将軍チャレンジ」: 15G、AT再突入期待度約80%
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数とレア役で初当たりを目指し、初当たりはATまたは将軍ボーナス。
- ボーナス間天井: 800G+α（前兆込みで最大900G前後となる場合あり）で初当たり。
- AT間天井: 1200GでAT当選。
- 将軍ボーナス4連続AT非当選後、5回目の将軍ボーナス終了後にAT当選。
- 将軍ボーナスでは通常ゲーム数を引き継ぐため、ボーナス当選でAT間天井進行はリセットされない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNPUBLISHED_MODE_DISTRIBUTIONS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井関連進行をRESETし、AT間天井は通常1200Gから800Gへ短縮。
- 仲間同行状態（爺・姫）はRESET。
- 将軍ボーナススルー回数もRESETとする機種特化解析あり。
- 朝一表示ステージは城下町。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、天井進行、仲間同行状態をCARRY_OVER。
- 将軍ボーナススルー回数もCARRY_OVERとする機種特化解析あり。
- 朝一の表示ステージは城下町へ戻るため、見た目だけでは設定変更との区別不可。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井、将軍ボーナススルー回数、仲間同行、有利区間をCARRY_OVERする機種特化比較資料を確認。
- 表示ステージは城下町へ戻る。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_CONSISTENT_WITH_CARRYOVER

### gameCounterReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 将軍ボーナス当選ではAT間ゲーム数はリセットされない。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 通常AT間天井: 1200G。
- 設定変更後: AT間800Gへ短縮。
- AT単発終了後も同じく800Gへ短縮されるため、「800GでAT当選」単独では設定変更確定にならない。
- ボーナス間天井800G+α自体は別系統。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機は朝一専用モードの公開固定振り分けを確認できず、規定Gゾーンと仲間同行を主要状態として扱う。
- 設定変更専用の規定ゲーム数振り分け/朝一モード振り分けは、機種名・型式名・メーカー名と「リセット/朝一/モード/振り分け」へ検索語を変更し、主要解析・業界資料を横断しても固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: UNVERIFIED_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更時は仲間同行（爺・姫）をRESET。
- 据え置き/純電源OFF→ONは仲間同行を内部的にCARRY_OVER。
- その他の内部ポイント類について、設定変更/純電断の完全な機種固有契約を複数高信頼資料で固定できず、一般論から補完しない。
confidence: ANALYSIS_HIGH_FOR_PARTNER_STATE / UNVERIFIED_FOR_OTHER_INTERNAL_POINTS

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- AT終了時の一部でも有利区間リセットあり。
- 設定変更以外の有利区間リセット時には八代将軍チャレンジの成功報酬が金7揃いとなる恩恵があるが、設定変更時は対象外。
confidence: ANALYSIS_HIGH

### resetBenefits
- AT間天井が1200G → 800Gへ短縮。
- 朝一からAT到達までの最大進行が浅くなるため、客側のリセット狙い価値を持つ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更で前日の仲間同行状態を失う。
- 設定変更時以外の有利区間リセットに付随する「八代将軍チャレンジ成功報酬・金7揃い」の恩恵は、設定変更時には付与されない。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更/据え置きとも朝一は城下町ステージのため表示だけでは判別不可。
- 朝一800GでAT天井に到達しても、前日がAT単発終了後なら据え置きでも800G短縮状態の可能性がある。
- 朝一AT間800Gを超えてもAT天井が発動しない場合は据え置き濃厚材料。
- 本機固有のリールガックン条件・発生率は「吉宗RISING/吉宗ライジング/L吉宗ライジングSA2/サボハニ/大都技研 + ガックン/設定変更/据え置き/リセット」で再探索したが高信頼な機種固有公開値を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_AND_CEILING / UNVERIFIED_FOR_GACKUN

### numericResetData
- 通常AT間天井: 1200G。
- 設定変更後AT間天井: 800G。
- AT単発終了後AT間天井: 800G。
- ボーナス間天井: 800G+α（最大900G前後となる場合あり）。
- 将軍ボーナススルー天井: 4連続AT非当選後、5回目でAT。
- 設定変更時の朝一モード/規定G振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- AT間天井短縮: 1200G → 800G。
- 朝一専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- リセット専用の当選率/恩恵発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- `吉宗RISING` と2025年導入 `スマスロ 吉宗`、2026年導入 `真打 吉宗` は別機種。検索時に後年機のリセット/モード情報が混入しやすいため明確に除外。
- 一部後年整理資料には異なる設定配列/機械割が見られるが、2023年12月の遊技日本発表と主要解析は設定1～6の 97.6 / 98.9 / 101.1 / 105.1 / 107.5 / 111.2% で一致するためこれをcanonical採用。

## missingFields
- setting-change dedicated mode/game-zone distribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH
- full reset contract for internal accumulated-point systems: UNVERIFIED_AFTER_RESEARCH
- inspectionCode public-primary-source confirmation: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2024-01-09群は再監査でcanonical候補5機を確認。
- 吉宗RISING / スマスロ バイオハザード ヴィレッジ / Lパチスロ マクロスフロンティア4 / L 仮面ライダー 7RIDERS / パチスロ武装神姫。
- グリーンべると2024-01-09新台スケジュールは前4機を掲載。コナミアミューズメント公式が `パチスロ武装神姫` の2024-01-09ホール稼働開始を明記するため同日群に追加。
- 本機はNo.1616として処理。群は `2024-01-09_GROUP_OPEN_1_OF_5_CANONICAL_PROCESSED`。

## sources
取得日: 2026-09-13
- 遊技日本 発売発表/型式/性能: https://news.p-world.co.jp/articles/26279/nippon
- 遊技通信 新機種発表/型式/AT概要: https://news.p-world.co.jp/articles/26149
- 長崎県遊技業協同組合 型式情報: https://nagasaki-yukyo.or.jp/information/%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD%E3%81%A7%E6%96%B0%E3%81%9F%E3%81%AA%E5%90%89%E5%AE%97%E3%81%8C%E7%99%BB%E5%A0%B4%EF%BC%81%E3%80%8C%E5%90%89%E5%AE%97%EF%BD%92%EF%BD%89%EF%BD%93%EF%BD%89%EF%BD%8E/
- グリーンべると 2024-01-09新台スケジュール: https://news.p-world.co.jp/articles/26523/greenbelt
- なな徹 機種解析まとめ: https://nana-press.com/kaiseki/machine/665/
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/665/18493/
- なな徹 将軍ボーナス: https://nana-press.com/kaiseki/machine/665/18499/
- なな徹 ヤメ時/天井補助: https://nana-press.com/kaiseki/machine/665/18492/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_ysmn_rising/3/
- ぽこすろっと 電源OFF→ON/スルー/仲間同行比較: https://www.nankaikoya.jp/yoshimune-rising-kitaichi/
- P-WORLD 機種DB/天井: https://www.p-world.co.jp/machine/database/9958
- Ativo 型式/検定番号: https://ativo.jp/2023/11/29/%EF%BD%8C%E5%90%89%E5%AE%97rising/
- コナミ公式 武装神姫2024-01-09稼働開始（群監査）: https://www.konami.com/amusement/corporate/ja/topics/20231225/

## notes
- 実機完全再現用の通常時全抽選は収集せず、性能コアと朝一客行動に影響するリセット差のみ保存。
- 2025年 `スマスロ 吉宗` / 2026年 `真打 吉宗` の解析は本レコードへ流用しない。
