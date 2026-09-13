# GⅠ優駿倶楽部黄金

recordNo: 1627
machineName: GⅠ優駿倶楽部黄金
aliases: GI優駿倶楽部黄金 / G1優駿倶楽部黄金 / スマスロGⅠ優駿倶楽部黄金 / ジーワンダービークラブゴールド
manufacturer: コナミアミューズメント
formalModel: LGⅠ優駿倶楽部黄金KD
inspectionCode: 3S1190
releaseDate: 2024-02-05
generation: 6.5号機 / スマスロ
systemType: AT / 周期育成・擬似ボーナス経由AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 遊技日本/P-WORLD、遊技通信/P-WORLD、P-WORLD機種DB、なな徹、必勝本で2024-02-05導入を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本・遊技通信の業界記事で型式名 `LGⅠ優駿倶楽部黄金KD` を確認。
- HAZUSEで型式名 `LGI優駿倶楽部黄金KD`、検定番号 `3S1190` を確認。ローマ数字I/ASCII Iは表記差として扱う。
confidence: INDUSTRY / ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- 1: 97.8%
- 2: 98.9%
- 3: 100.5%
- 4: 104.5%
- 5: 108.1%
- 6: 112.0%
initialHitBySetting:
- setting1: GⅠボーナス 1/312.1 / GⅠロード 1/599.6
- setting2: GⅠボーナス 1/312.0 / GⅠロード 1/599.1
- setting3: GⅠボーナス 1/311.9 / GⅠロード 1/596.8
- setting4: GⅠボーナス 1/311.8 / GⅠロード 1/595.2
- setting5: GⅠボーナス 1/311.7 / GⅠロード 1/590.3
- setting6: GⅠボーナス 1/311.6 / GⅠロード 1/586.9
baseGamesPer50: 約35G/50枚
netIncrease:
- GⅠボーナス: 約5.2枚/G
- GⅠロード: 約2.7枚/G
- 上位AT「凱旋RUSH」: 約5.2枚/G
basicPayout:
- GⅠボーナス: 約100枚
- GⅠロード: 1セット30G+α
- 上位AT「凱旋RUSH」: 1セット30G+α、GⅠレース勝利期待度約95%
- 上位AT突入後の引き戻し失敗までの期待獲得枚数: 約3600枚（設定1、メーカー発表系）
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は1週8Gを基本とする周期育成型。約9週で新馬戦へ出走。
- ゲーム数天井は333 / 555 / 777 / 999 / 1111G+αのいずれか。1111G天井のみGⅠボーナス+GⅠロード当選濃厚。
- GⅠボーナスのAT非当選を最大5回連続すると、次回6回目のGⅠボーナスでGⅠロード当選濃厚。
- キタサンブラック選択時は天井短縮抽選あり。初回は333G以上、2回目以降は111G以上の減算。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_CONFLICT_AND_PARTIAL_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間RESET、ゲーム数天井RESET。
- ボーナススルー回数は再抽選、育成馬は再抽選、育成レベルはRESET。
- UMAメダル、液晶アイコン、グランプリポイントもRESETする解析資料を確認。
- ゲーム数天井は設定変更専用振り分けへ書き換えられ、555Gが96%超で選択される。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間・ゲーム数天井をCARRY_OVER。
- ボーナススルー回数、育成馬、育成レベル、UMAメダル、液晶アイコン、グランプリポイントについて、純電源OFF→ON時は引継ぎを確認しているが、据え置き単独の全項目を同一高信頼表で独立明記した資料は固定できず、設定変更差分からの推定はしない。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_AND_GAME_CEILING / UNVERIFIED_FOR_FULL_SUBSTATE_DIRECT_CONTRACT

### powerCycleBehavior
- 純電源OFF→ONではゲーム数天井を引き継ぐ。
- ボーナススルー回数、育成馬、育成レベル、UMAメダル、液晶アイコン、グランプリポイントを内部的に引き継ぐ。
- 電源OFF→ON後の開始ステージはカフェステージ。
- 有利区間は純電断だけでは設定変更扱いにならず、機種固有解析では設定変更時のみリセット契約が明記されているためCARRY_OVERとして扱う。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_COUNTERS / ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_INFERENCE_FROM_EXPLICIT_RESET_TIMING

### gameCounterReset
- 通常ゲーム数天井: 最大1111G+α。
- 設定変更: RESETし、設定変更専用天井振り分けへ再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- ボーナススルー回数: 設定変更時再抽選、純電源OFF→ON時引継ぎ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更時天井振り分け:
  - 333G: 0.39%
  - 555G: 96.48%
  - 777G: 2.34%
  - 999G: 0.39%
  - 1111G: 0.39%
- 555G以内合算: 96.87%。
- 最大天井自体は1111G+αの振り分けが0.39%残るため、「リセット時は必ず555G天井」ではない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 本機は天井ゲーム数・育成馬・スルー天井など複数の朝一再抽選要素を持つが、独立した通常A/B/C等のモード名称による公開朝一モード振り分けは主要解析で確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時は育成馬を再抽選する。
confidence: ANALYSIS_HIGH_FOR_HORSE_REDRAW / PUBLIC_VALUE_NOT_FOUND_FOR_NAMED_MODE_TABLE

### stateAfterReset
- 設定変更時は育成レベル、UMAメダル、液晶アイコン、グランプリポイントをRESETする資料を確認。
- 純電源OFF→ONではこれらを内部的に引き継ぐ。
- 通常/高確等の独立した内部状態テーブルの設定変更時振り分けは十分な再探索後も公開固定値を確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NAMED_PROGRESS_STATES / UNVERIFIED_FOR_GENERIC_INTERNAL_STATE_TABLE

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: 設定変更時のみ有利区間リセットとする解析契約を根拠にCARRY_OVER扱い。
- 有利区間ランプでは設定変更/据え置き判別不可。
confidence: ANALYSIS_HIGH

### resetBenefits
- 555G以内のゲーム数天井選択率が大幅上昇。精密振り分けでは333G+555G合算96.87%。
- なな徹では設定変更後のGⅠボーナスからGⅠロード当選率が約50%へ上昇すると記載。
- 平均200～300GほどでGⅠボーナス当選に期待できるとの解析記載あり。
confidence: ANALYSIS_HIGH

### resetPenalties
- 前日のゲーム数天井進行、ボーナススルー進行、育成馬、育成レベル、UMAメダル、液晶アイコン、グランプリポイントの持越し価値は設定変更で失われる。
- 設定変更専用の固定的なマイナス期待値・不利率は公開固定値を確認できず。
confidence: ANALYSIS_HIGH_FOR_RESET_ITEMS / PUBLIC_VALUE_NOT_FOUND_FOR_NUMERIC_PENALTY

### resetDetection
- 有利区間ランプでは設定変更/据え置き判別不可。
- なな徹はリセット判別を「現在調査中」としている。
- 後年攻略整理では朝一1G目のリールガックンを設定変更濃厚材料とする記載があるが、主要一次/上位解析で機種固有条件・対策時挙動まで固定できず、DBでは `ANALYSIS_SINGLE / PROVISIONAL_GACKUN` とする。
- 朝一育成ステージ開始を据え置き濃厚とする後年整理資料がある一方、必勝本は設定変更・電源OFF→ONともカフェステージ開始とするため、開始ステージ単独の据え置き判別は補助材料扱い。
confidence: ANALYSIS_HIGH_FOR_LAMP / ANALYSIS_SINGLE_FOR_GACKUN_AND_STAGE_DETECTION

### numericResetData
- 設定変更時ゲーム数天井:
  - 333G 0.39%
  - 555G 96.48%
  - 777G 2.34%
  - 999G 0.39%
  - 1111G 0.39%
- 555G以内合算: 96.87%
- 設定変更後GⅠボーナス→GⅠロード当選率: 約50%（なな徹）
- 朝一GⅠボーナス当選目安: 平均200～300Gほど（なな徹表現）

### publicMorningNumbers
- 333G 0.39% / 555G 96.48% / 777G 2.34% / 999G 0.39% / 1111G 0.39%。
- 555G以内合算96.87%。
- 設定変更後GⅠボーナスからGⅠロード当選率約50%。

## missingFields
- 通常/高確等の独立した内部状態の設定変更時振り分け: UNVERIFIED_AFTER_RESEARCH
- 名称付き通常モードA/B等の朝一振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 据え置き単独時の育成レベル/UMAメダル/液晶アイコン/グランプリポイント各項目を一括で明記した直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件・発生率を一次/主要解析で確定: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 一部後年攻略記事は「設定変更後87.5%で555G以下/555G天井」と記載するが、P-WORLD・なな徹・必勝本の精密振り分けは333G 0.39% + 555G 96.48% = 96.87%。canonicalは精密解析値96.87%とし `CONFLICT_PRELIMINARY_87_5_VS_DETAILED_96_87` を保持。
- K-NaviはGⅠボーナス設定1を `1/321.1` と表記するが、遊技日本/P-WORLD、P-WORLD機種DB、なな徹、必勝本は `1/312.1` で一致するためcanonicalは1/312.1。`CONFLICT_KNAVI_SETTING1_BONUS_TYPO`。
- K-Naviの機械割表示は設定2/3ラベルが逆転している表示がある。業界発表・P-WORLD・なな徹・必勝本で設定2 98.9%、設定3 100.5%が一致するためこちらをcanonicalとする。`CONFLICT_KNAVI_SETTING_LABEL_ORDER`。

## sources
retrievedAt: 2026-09-14
- KONAMI公式機種サイト — 製品公式、ゲームフロー/各機能公開: https://www.konami.com/amusement/psm/slot/g1-dclub-gold/
- 遊技日本/P-WORLD — 型式、設定別スペック、商品発表: https://news.p-world.co.jp/articles/26239/nippon
- 遊技通信/P-WORLD — 型式、純増、GⅠロード/凱旋RUSH基本性能: https://news.p-world.co.jp/articles/26287/yugitsushin
- P-WORLD機種DB — 設定別スペック、50枚約35G、GⅠボーナス約100枚、天井精密振り分け: https://www.p-world.co.jp/machine/database/9964
- HAZUSE — 型式、検定番号3S1190、導入日、純増: https://hazuse.com/machine/pachislot/3S1190/
- なな徹 機種TOP — 設定別スペック、ベース、基本ゲーム性: https://nana-press.com/kaiseki/machine/686/
- なな徹 朝一 — 有利区間/天井、朝一恩恵、天井精密振り分け、ランプ判別不可: https://nana-press.com/kaiseki/machine/686/19402/
- なな徹 天井 — 通常天井、スルー天井、リセット狙い: https://nana-press.com/kaiseki/machine/686/19355/
- なな徹 有利区間 — 設定変更時有利区間RESET、有利区間ランプ判別不可: https://nana-press.com/kaiseki/machine/686/19357/
- 必勝本 天井&設定変更 — 設定変更/電源OFF→ON時のゲーム数・スルー回数・育成馬・育成レベル・UMAメダル・液晶アイコン・グランプリポイント: https://p.hisshobon.jp/machine/4233/1/99534
- 必勝本 天井ゲーム数抽選 — 設定変更時333/555/777/999/1111G振り分け: https://hisshobon.com/machineinfo/82679/
- 必勝本 基本スペック — 設定別スペック、2024-02-05導入: https://hisshobon.com/machineinfo/82710/
- 後年攻略整理（補助） — ガックン/朝一ステージ、87.5%表記の競合確認: https://www.nankaikoya.jp/g1gold-kitaichi/ ; https://www.slopachi-quest.com/article/lg1derbyclub-gold-tenjou/
