# スマスロ ゴールデンカムイ

recordNo: 1640
machineName: スマスロ ゴールデンカムイ
aliases: Lゴールデンカムイ / L パチスロゴールデンカムイ KR / 金カム
manufacturer: 銀座製造 / サミー販売
formalModel: L パチスロゴールデンカムイ KR
inspectionCode: 330548
releaseDate: 2024-04-08
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス経由型 + AT直撃
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- サミー発表を伝える遊技日本・遊技通信は2024年4月全国導入予定と報道。
- HAZUSE、P-WORLD系機種DB、複数解析資料が2024-04-08導入で一致。
- 2024-04-08群の業界新台スケジュールでも同日候補として確認済み。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本・遊技通信が製造元を銀座、型式名を `L パチスロゴールデンカムイ KR` と報道。
- HAZUSEは同型式に検定番号 `330548` を紐付ける。
confidence: INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.6%
- setting3: 100.8%
- setting4: 105.4%
- setting5: 108.8%
- setting6: 113.3%
initialHitBySetting:
- setting1: 初当り合算 1/308.1 / AT 1/818.4
- setting2: 初当り合算 1/302.4 / AT 1/801.8
- setting3: 初当り合算 1/290.4 / AT 1/770.3
- setting4: 初当り合算 1/268.5 / AT 1/698.8
- setting5: 初当り合算 1/260.1 / AT 1/678.3
- setting6: 初当り合算 1/248.8 / AT 1/647.3
baseGamesPer50: 約36.9〜37G/50枚
netIncrease:
- AT「黄金神威」: 約2.7枚/G
- 擬似ボーナス / 上位AT「真・黄金神威」: 約4.5枚/G
basicPayout:
- 決戦BONUS: 30G / 純増約4.5枚/G / 約135枚目安
- KAMUY BONUS: 10G級 / 純増約4.5枚/G
- AT「黄金神威」: 初期100G / 純増約2.7枚/G
- 上位AT「真・黄金神威」: 初期100G+α / 純増約4.5枚/G
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は毎ゲーム加算される「ピュウ☆」の規定数到達、レア役/CZ等から擬似ボーナスを目指す。
- 通常ピュウ☆天井は最大1800ピュウ☆。平均実ゲーム数目安は約720G。
- 擬似ボーナスは決戦BONUS / KAMUY BONUS。決戦BONUS後の決戦CHANCEなどからAT「黄金神威」へ繋ぐ。
- AT「黄金神威」はゲーム数上乗せ型。上位AT「真・黄金神威」は純増約4.5枚/G。
- 砂金ポイントは蓄積型内部ポイントで、MAX状態でのボーナス当選時はAT以上濃厚となる系統の朝一価値要素。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PARTIAL_POWER_CYCLE_SUBFIELDS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- ピュウ☆天井、現在ピュウ☆、内部状態、砂金ポイントをRESETして再構成。
- 設定変更後は通常最大1800ピュウ☆の天井が最大1600ピュウ☆へ短縮。
- 設定変更時は内部的にピュウ☆加算抽選が行われるため、液晶上の見かけのピュウ☆と前兆発生タイミングがずれる場合がある。
- 砂金ポイントは設定変更専用の初期振り分けで再抽選され、通常開始より明確に優遇される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、ピュウ☆天井、現在ピュウ☆、内部状態、砂金ポイントをCARRY_OVER。
- なな徹の設定変更/据え置き比較表で上記各項目の引継ぎを機種固有に確認。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみでは天井と内部状態を引き継ぐと機種別比較資料で確認。
- 現在ピュウ☆、砂金ポイント、有利区間の純電断単独時の個別契約は、機種名/型式/メーカー/シリーズ名と「電源OFF ON」「電断」「据え置き」「ピュウ」「砂金ポイント」「有利区間」を組み替えて再探索したが、設定変更/据え置き比較ほど直接的な機種専用資料を固定できなかった。
- 一般的なスマスロ挙動から推定せず、これらの純電断サブ項目は `UNVERIFIED_AFTER_RESEARCH` とする。
confidence: ANALYSIS_SINGLE_FOR_CEILING_AND_INTERNAL_STATE / UNVERIFIED_FOR_REMAINING_SUBFIELDS

### gameCounterReset
- 設定変更: ピュウ☆天井と現在ピュウ☆をRESET。内部初期ピュウ☆加算抽選あり。
- 据え置き: ピュウ☆天井/現在ピュウ☆をCARRY_OVER。
- 電源OFF→ON: 天井CARRY_OVERは確認。現在ピュウ☆表示/内部値の純電断単独契約は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE_CEILING

### ceilingAfterReset
- 通常: 最大1800ピュウ☆到達でボーナス当選濃厚（平均約720G）。
- 設定変更後: 最大1600ピュウ☆へ短縮（平均約640G）。
- 短縮幅: 最大200ピュウ☆。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機の主要朝一管理は独立した名称付き「朝一モード」より、ピュウ☆天井短縮・内部ピュウ☆加算・砂金ポイント初期優遇として公開されている。
- 設定変更専用の通常/天国等のモード振り分け固定値は、主要解析・旧DB・後年整理まで再探索しても確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_PUBLIC_RESET_STRUCTURE / UNVERIFIED_FOR_UNPUBLISHED_MODE_TABLE

### stateAfterReset
- 設定変更で内部状態RESET、据え置きでCARRY_OVER。
- 電源OFF→ONは内部状態CARRY_OVERとする機種別比較資料あり。
- 設定変更後の低確/高確等の具体的初期振り分けは公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY_OVER / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### advantageousSectionReset
- 設定変更時に有利区間RESET。
- 据え置き時は有利区間CARRY_OVER。
- 通常遊技中の有利区間リセット契機として、2000枚以上獲得したAT終了時の一部、エンディング終了時が公開されている。
- 設定変更による有利区間RESETでは、通常遊技中の有利区間リセット時の恩恵「ゴールデンロード」は付与対象外と明記されるため、朝一即上位AT恩恵と誤解しない。
- 純電源OFF→ON単独時の有利区間契約は直接資料固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE/CARRY_OVER_AND_IN_GAME_RESET / UNVERIFIED_FOR_POWER_CYCLE

### resetBenefits
- ピュウ☆天井が1800→1600へ短縮（平均実G目安720→640G）。
- 設定変更時に内部ピュウ☆が加算されるため、実質的に規定ピュウ☆到達がさらに早まる可能性あり。ただし加算ピュウ☆数の振り分けは公開固定値未確認。
- 初期砂金ポイント振り分けが優遇。
- 設定変更直後は特殊フリーズ抽選条件があり、1G目中段チェリー、または1G目から2G連続レア小役でフリーズ濃厚と解析されている。朝一客行動に影響するため例外的に保持するが、詳細内部抽選表は収集しない。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更時の主要な定量的不利要素は、メーカー/業界/主要解析/後年整理を横断して再探索した範囲では確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間RESETそのものでは通常遊技中の「ゴールデンロード」恩恵が付かない点は、朝一恩恵の誤認防止事項として保持。

### resetDetection
- なな徹の機種専用朝一資料ではリセット判別は「現在調査中」。本機固有のガックン条件/発生率は検索語を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更後の最大天井は1600ピュウ☆なので、朝一にリセット契約上の最大値を超えてボーナス非当選なら据え置き推測材料。ただし内部ピュウ☆加算や表示/前兆の見え方を伴うため、単純な表示値だけで確定判別としない。
- 有利区間ランプを用いた本機固有の確定的朝一判別情報は主要資料から固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESEARCH_STATUS / UNVERIFIED_FOR_GAKKUN_AND_LAMP

### numericResetData
- 設定変更時天井: 最大1600ピュウ☆（通常最大1800ピュウ☆）
- 平均実ゲーム数目安: 約640G（通常約720G）
- 初期砂金ポイント振り分け:
  - 20pt: 33.6%
  - 50pt: 32.8%
  - 80pt: 28.1%
  - 90pt: 4.7%
  - 100pt: 0.8%
- 50pt以上合算: 66.4%
- 80pt以上合算: 33.6%
- 内部初期ピュウ☆加算数振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用モード振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- 最大1600ピュウ☆ / 平均約640G相当の短縮天井。
- 初期砂金ポイントは20pt 33.6%、50pt 32.8%、80pt 28.1%、90pt 4.7%、100pt 0.8%。
- 50pt以上は66.4%、80pt以上は33.6%。
- 設定変更直後の特殊フリーズ条件は公開されるが、発生率そのものは本DBでは固定数値として扱わない。

## conflicts
- KAMUY BONUSの継続ゲーム数は主要機種紹介で10G表記が中心だが、一部後年二次資料に11G表記がある。基本性能では業界/機種DB側の10G級をcanonicalとし、厳密なゲーム数差は `CONFLICT_MINOR_BONUS_LENGTH_10G_VS_11G` として保持。
- メーカー表記は販売ブランドとしてサミー、製造元として銀座。両者を混同せず `銀座製造 / サミー販売` とする。

## missingFields
- 純電源OFF→ON時の現在ピュウ☆・砂金ポイント・有利区間の機種固有直接契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部初期ピュウ☆加算数振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更後の具体的内部状態振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプによる確定的朝一判別: UNVERIFIED_AFTER_RESEARCH

## groupAudit
- 2024-04-08群のknown 4候補の2機目。
- 同日known候補: `ジャグラーガールズSS / スマスロ ゴールデンカムイ / Lうる星やつら / ストライク・ザ・ブラッド`。
- 本機処理後は `Lうる星やつら` → `ストライク・ザ・ブラッド` を継続し、4候補完了後にPB・別型式・地域先行・延期/段階導入を再監査する。

## sources
取得日: 2026-09-14
- サミー公式製品サイト: https://www.sammy.co.jp/japanese/product/pachislot/gol_ka/
- 遊技日本 新台発表: https://yugi-nippon.com/pachinko-new-machine/post-62536/
- 遊技日本 / P-WORLD 新台記事: https://news.p-world.co.jp/articles/26663/nippon
- 遊技通信 / P-WORLD 新台記事: https://news.p-world.co.jp/articles/26649/yugitsushin
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9987
- HAZUSE機種DB: https://hazuse.com/machine/pachislot/SX0069/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/712/20696/
- なな徹 砂金ポイント: https://nana-press.com/kaiseki/machine/712/20704/
- 一撃 天井・朝一: https://1geki.jp/slot/l_golden_kamui/3/
- ちょんぼりすた 総合解析: https://chonborista.com/slot/sammy-slot/206476/
- パチ&スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2600/2
- パチ&スロ必勝本 決戦BONUS/KAMUY BONUS: https://hisshobon.com/machineinfo/82946/
- Altema 朝一・電源ON/OFF比較: https://altema.jp/pachimo/lkamui
- ぽこすろっと 朝一・リセット整理: https://www.nankaikoya.jp/goldenkamuy-kitaichi/
- 2024-04-08境界 グリーンべると: https://news.p-world.co.jp/articles/27485/greenbelt

## recordQuality
coreConfidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH
resetConfidence: ANALYSIS_HIGH_WITH_PARTIAL_POWER_CYCLE_SUBFIELDS
missingPolicy: RESEARCH_EXHAUSTED_BEFORE_UNVERIFIED
conflictPolicy: MINOR_SOURCE_CONFLICT_PRESERVED_NOT_AVERAGED
