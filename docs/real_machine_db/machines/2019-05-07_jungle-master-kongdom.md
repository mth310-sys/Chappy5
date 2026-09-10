# ジャングルマスターコングダム

recordNo: 1282
machineName: ジャングルマスターコングダム
manufacturer: 山佐
formalModel: ジャングルマスターコングダム／CC
certificationNumber: 7S1352
releaseDate: 2019-05-07
generation: 5.9号機
systemType: A+RT / 技術介入 / 4段階設定

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.3% |
| 2 | 100.2% |
| 5 | 105.1% |
| 6 | 108.5% |

信頼度: HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/300.6 | 1/374.5 | 1/166.8 |
| 2 | 1/291.3 | 1/337.8 | 1/156.4 |
| 5 | 1/283.7 | 1/299.3 | 1/145.6 |
| 6 | 1/271.9 | 1/273.1 | 1/136.2 |

精密値を掲載する資料では、設定1から順にBIG 1/300.62・1/291.27・1/283.71・1/271.93、REG 1/374.49・1/337.81・1/299.25・1/273.07、合算1/166.76・1/156.41・1/145.64・1/136.25。

信頼度: HIGH_MULTI_SOURCE

## baseGamesPer50

- 約34〜35G/50枚
- 当時業界記事: 約34G/50枚
- 解析資料: 約34Gまたは約34.8G/50枚
- 別スペック整理: 約35G/50枚

信頼度: HIGH_MULTI_SOURCE_WITH_ROUNDING_RANGE

## netIncrease

- RT「ナイトモード」: 最大20G、BIG後に必ず突入
- ロングRT「ジャングルタイム」: 100G or 999G
- RT純増: 現状維持程度 / 約±0枚/G
- ジャングルタイム中のREGでは、残りRTゲーム数があればRTへ復帰

信頼度: HIGH_MULTI_SOURCE

## basicPayout

- BIG: 最大300枚
- REG: 最大84枚
- BIG終了後は20GのRT「ナイトモード」へ突入
- ナイトモード中の昇格リプレイ成立で100G or 999Gの「ジャングルタイム」へ移行

信頼度: CONTEMPORARY_MULTI_SOURCE

## modeSpecificMinimumData

- 5.9号機A+RT。
- 設定は1 / 2 / 5 / 6の4段階。
- BIGは赤7・緑7の2系統。赤7BIGは偶数設定、緑7BIGは奇数設定で出現比率が優遇される解析あり。
- BIG後は20G RT「ナイトモード」。特殊リプレイ成立でロングRT「ジャングルタイム」へ昇格。
- ジャングルタイムは100Gまたは999G。途中のREG成立では残りRTがあれば復帰する貫通型。
- 通常ゲーム数天井・規定ゲーム数ゾーンは非搭載。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED

- settingChangeBehavior: 本機固有の「設定変更時」におけるRT状態・成立済みボーナス状態・テトラリール初期状態を直接記述する高信頼資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。一般5.9号機/A+RT機の挙動から補完しない。
- carryOverBehavior: 「据え置き時」だけを独立条件としてRT残りG・内部RT状態・成立済みボーナス状態の扱いまで明記した本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: 純電源OFF→ONのみのRT残りG・内部RT状態・テトラリール表示/状態を明記する本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterReset: 通常ゲーム数天井非搭載のため天井ゲーム数カウンタは `NOT_APPLICABLE`。RT残りゲーム数の設定変更/純電断時契約は `UNVERIFIED_AFTER_RESEARCH`。
- ceilingAfterReset: 天井非搭載のため `NOT_APPLICABLE`。リセット専用短縮天井なし。
- modeAfterReset: 通常時の朝一専用モード・設定変更時モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。RT状態の設定変更/据え置き/純電断別契約は未固定。
- stateAfterReset: ナイトモード/ジャングルタイムなどRT状態の設定変更・据え置き・純電断時の直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: 5.9号機だが、本機はリアルボーナス+RT機。朝一客判断に使える本機固有の有利区間ランプ/区間リセット契約は確認できず `NOT_ESTABLISHED_AS_APPLICABLE_RESET_SIGNAL`。推測で補完しない。
- resetBenefits: 設定変更専用の短縮天井、朝一ボーナス/CZ優遇、専用RT付与などは `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 設定変更専用の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: 本機は通常のメインリールとは別にテトラリール始動・逆回転・バウンド系演出を搭載し、朝一実戦記でも「ガックンと勘違いした」とする記録がある。このためテトラ挙動を設定変更ガックンと誤認しうる。ただし本機固有の設定変更時メインリールガックン発生条件・発生率を示す解析は固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。朝一表示による確定判別値も確認できず。
- numericResetData: 設定変更時のみ適用される公開朝一数値（モード振り分け、短縮天井、当選率、RT付与率等）は `PUBLIC_NUMERIC_RESET_DATA_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ

「ジャングルマスターコングダム / コングダム / ジャングルマスターコングダム／CC / 7S1352 / 山佐」に「設定変更 / リセット / リセット時 / 朝一 / 据え置き / 電源OFF ON / RT引継ぎ / ナイトモード / ジャングルタイム / ガックン / テトラリール / 有利区間」を組み合わせて検索。HAZUSE、パチマガスロマガ、P-WORLD、当時解析、古い機種DB、後年回顧資料まで横断したが、性能・RT仕様は固定できる一方、本機固有の設定変更/据え置き/純電断を分離した内部状態契約は固定できなかった。一般論からの補完は行わない。

## qualityNotes / conflicts

- 導入日はHAZUSE、複数解析、2019年導入カレンダーが `2019-05-07` で一致。業界発表の「5月上旬ホールデビュー予定」と矛盾しない。
- 型式は複数資料で `ジャングルマスターコングダム／CC` が一致。HAZUSE machine_code `7S1352` を検定番号として保持。
- 50枚ベースは約34G、34.8G、35Gの資料差があるが、丸め精度差の範囲と判断し約34〜35Gで保持。
- BIG/REG獲得枚数は当時業界記事・P-WORLD・パチマガスロマガ・当時解析が最大300枚/84枚で一致。一方、後年の5号機回顧DBにBIG最大155枚/REG40枚との記載があり、同型式の当時資料と大きく競合するため `CONFLICT_RETROSPECTIVE_PAYOUT_155_40_VS_CONTEMPORARY_300_84` として注記し、canonicalは当時複数資料一致の300/84を採用。
- RT純増は「現状維持程度」と「±0枚/G」で定義上整合するためCONFLICT扱いしない。

## sources

取得日: 2026-09-11

1. 娯楽産業 — 山佐 新機種「ジャングルマスターコングダム」発表
   - https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%9E%E3%82%B9%E3%82%BF%E3%83%BC%E3%82%B3%E3%83%B3%E3%82%B0%E3%83%80%E3%83%A0%E3%80%8D/
   - 2019-03-06記事。山佐、A+RT、BB最大300枚/RB最大84枚、BIG後20G RT、ロングRT100/999G、設定6合算約1/136、50枚約34G、5月上旬導入予定
   - reliability: INDUSTRY_CONTEMPORARY
2. HAZUSE DATA — ジャングルマスターコングダム
   - https://data.hazuse.com/?genre=209&machine_code=7S1352
   - machine_code 7S1352、山佐、ボーナス+RT、導入2019-05-07、RT仕様
   - reliability: MACHINE_DATABASE_HIGH
3. P-WORLD — ジャングルマスターコングダム
   - https://www.p-world.co.jp/machine/database/8901
   - 山佐、リアルボーナス+RT、BIG最大300枚、REG最大84枚、ナイトモード20G、ジャングルタイム100/999G
   - reliability: MACHINE_DATABASE_HIGH
4. パチマガスロマガ — ジャングルマスターコングダム
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/232/a.php
   - 山佐/2019年5月、5.9号機、BIG最大300枚、REG最大84枚、RT仕様
   - reliability: ANALYSIS_HIGH
5. パチマガスロマガ — RT解説
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/232/01-1.php
   - ナイトモード20G、特殊リプレイから100/999Gジャングルタイム、REGで残りRT復帰
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと — ジャングルマスターコングダム解析
   - https://www.slopachi-quest.com/article/jungle-master-kongdom/
   - 導入2019-05-07、5.9号機、約34.8G/50枚、天井非搭載、設定別スペック、BIG300/REG84枚
   - reliability: ANALYSIS_CONTEMPORARY
7. スロパチネット — ジャングルマスターコングダム
   - https://slopachi-net.com/kongdom
   - 型式 `ジャングルマスターコングダム／CC`、導入2019-05-07、設定別BIG/REG/合算/出玉率、天井非搭載
   - reliability: ANALYSIS_CONTEMPORARY
8. モゲスロ — ジャングルマスターコングダム
   - https://moge-site.com/archives/21990
   - 2019-05-07、設定別精密ボーナス確率、機械割
   - reliability: ANALYSIS_CONTEMPORARY
9. ぱちんこキュレーション — スペック情報
   - https://pachinko-curation.com/1052/
   - 2019-05-07、山佐、A+RT、約35G/50枚、RT純増±0枚/G、設定別スペック
   - reliability: SECONDARY_SPEC
10. 5号機クロニクル — 山佐5号機一覧
   - https://5goki.com/yamasa
   - ジャングルマスターコングダムをA+RTとして掲載。ただしBIG155/REG40枚記載は当時複数資料と競合
   - reliability: RETROSPECTIVE_SECONDARY_CONFLICT
11. にくじる — ジャングルマスターコングダム実戦/評価
   - https://www.nikuziru.com/archives/3926
   - 朝一実戦でテトラリールの大きな始動挙動を「ガックンしたのかと勘違い」と記録。設定変更確定挙動とはしていない
   - reliability: FIELD_OBSERVATION_SINGLE
12. モゲスロ — 2019年新台導入日カレンダー
   - https://moge-site.com/new-slot2019
   - 2019-05-07にジャングルマスターコングダム、ボンバーパワフルIIIを掲載
   - reliability: HISTORICAL_CALENDAR

missingFields:
- 設定変更時/据え置き時/純電源OFF→ON時のRT状態を分離した本機固有契約
- 本機固有ガックンの発生条件・発生率
- 設定変更専用の公開朝一数値

conflicts:
- CONFLICT_RETROSPECTIVE_PAYOUT_155_40_VS_CONTEMPORARY_300_84

coreStatus: COMPLETE_CORE
