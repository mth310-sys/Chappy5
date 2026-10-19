# わたしの幸せな結婚

recordNo: 1739
machineName: わたしの幸せな結婚
aliases: パチスロ わたしの幸せな結婚 / わた婚 / Lわたしの幸せな結婚PN
manufacturer: KPE（製造） / コナミアミューズメント（販売・ブランド）
formalModel: Lわたしの幸せな結婚PN
inspectionCode: 5S0052
releaseDate: 2025-07-07
generation: 6.5号機 / スマスロ
systemType: 擬似ボーナス + CZ + ゲーム数上乗せ型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- コナミアミューズメント公式でKPE製造、2025-07-07稼働開始予定を確認。
- 情報島の検定通過記事で型式 `Lわたしの幸せな結婚PN`、KPEを確認。
- HAZUSE/業界資料で検定番号 `5S0052`、2025-07-07導入を確認。
confidence: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.7%
- setting3: 100.4%
- setting4: 105.1%
- setting5: 108.0%
- setting6: 112.0%
initialHitBySetting:
  bonusInitialHit:
  - setting1: 1/290.8
  - setting2: 1/286.5
  - setting3: 1/277.3
  - setting4: 1/255.3
  - setting5: 1/251.4
  - setting6: 1/249.4
  atInitialHit:
  - setting1: 1/594.3
  - setting2: 1/583.4
  - setting3: 1/558.8
  - setting4: 1/494.7
  - setting5: 1/484.3
  - setting6: 1/479.4
baseGamesPer50: 約33.8G
netIncrease:
- AT「夢幻RUSH」: 約2.2枚/G
- 擬似ボーナス: 約4.2枚/G
basicPayout:
- わた婚BONUS: 25G、純増約4.2枚/G
- EPISODE BONUS: 25G、純増約4.2枚/G、AT突入濃厚
- CZ「異形BATTLE」: 3G+α、成功期待度約40%
- AT「夢幻RUSH」: 初期50G+α、純増約2.2枚/G
confidence: OFFICIAL_FOR_GAME_CONCEPT / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数・CZなどから擬似ボーナスを目指し、ボーナス中抽選またはEPISODE BONUSからATへ。
- 通常モードは通常A / 通常B / 通常C / 天国 / 超天国。
- ボーナス間通常最大天井800G+α、CZ間350G+α、ボーナス6スルー後の7回目でEPISODE BONUS、CZ7スルー後の8回目でEPISODE BONUS。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_MULTI_SOURCE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 設定変更時は有利区間・天井・内部モードをリセット。
- 設定変更後は通常C以上濃厚となり、ボーナス間天井が通常最大800G+αから350G+αへ短縮。
- ボーナススルー天井も通常6スルー後7回目から、設定変更後は最大5スルーへ短縮。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きは天井・内部モード・有利区間を引き継ぐ扱い。
- 前日のゲーム数/モード進行が残るため、朝一は宵越し天井狙いが成立し得る。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみでは有利区間・天井・内部モードを引き継ぐ機種別比較表を確認。
- 別解析では内部状態欄のみ `調査中` とするため、通常/高確等の状態契約はモード引継ぎと分けて扱う。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_CEILING_MODE / PARTIAL_FOR_OTHER_INTERNAL_STATE

### gameCounterReset
- 設定変更: ボーナス天井進行をリセット。
- 据え置き/電源OFF→ON: 天井進行を引き継ぐ。
- AT中もボーナス規定G数/モードの進行を引き継ぐゲーム性のため、データカウンター表示だけでなく液晶G数確認が重要。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
normalMaximumBonusCeiling: 800G+α
resetMaximumBonusCeiling: 350G+α
normalBonusThroughCeiling: 6スルー後、7回目でEPISODE BONUS
resetBonusThroughCeiling: 最大5スルー
czCeiling: ボーナス/CZ間350G+α
czThroughCeiling: CZ7スルー後、8回目でEPISODE BONUS
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更後は通常C以上濃厚。
- 公開振り分け: 通常C 94.9% / 天国 4.7% / 超天国 0.4%。
- 通常C天井350G+α、天国/超天国天井100G+α。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 内部モードは設定変更時リセット、純電断では引継ぎを確認。
- 内部状態については別資料で設定変更時リセット、電源OFF→ON側 `調査中` とする表があり、モードと状態を同一視しない。
confidence: ANALYSIS_HIGH_FOR_MODE / PARTIAL_DIRECT_SOURCE_FOR_OTHER_INTERNAL_STATE

### advantageousSectionReset
- 設定変更時: 有利区間リセット。
- 電源OFF→ON: 有利区間引継ぎ。
- 据え置きは電源OFF→ON側の機種別比較契約に従い引継ぎ扱い。
confidence: ANALYSIS_HIGH

### resetBenefits
- ボーナス間天井800G+α → 350G+αへ短縮。
- ボーナススルー天井が最大5スルーへ短縮。
- 朝一モードは通常C以上確定級の優遇で、94.9%通常C / 4.7%天国 / 0.4%超天国。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更で前日の天井進行・モードを失うため、据え置きなら残る宵越し価値は消失。
- 一方、朝一専用の350G上限とモードC以上優遇があるため、通常の天井リセット機より朝一恩恵が明確。
- 設定変更専用の冷遇モード/初当たり低下率は `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LOST_CARRYOVER_AND_RESET_BENEFIT / NONE_CONFIRMED_AFTER_RESEARCH_FOR_EXTRA_PENALTY

### resetDetection
- 朝一350G+αを消化してもボーナス非当選なら据え置き濃厚材料。
- 朝一でAT非当選ボーナスが連続し、6回目でもEPISODE BONUSへ行かなければ据え置き濃厚材料。
- 1G目にリールガックンすれば設定変更濃厚（ホール側が対策していない場合）という機種別解析を確認。
- ガックン発生率の公開数値は確認できない。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_GAKKUN_DETECTION / PUBLIC_VALUE_NOT_FOUND_FOR_GAKKUN_RATE

### numericResetData
resetModeDistribution:
- normalC: 94.9%
- heaven: 4.7%
- superHeaven: 0.4%
normalMaximumBonusCeiling: 800G+α
resetMaximumBonusCeiling: 350G+α
normalBonusThroughCeiling: 6スルー後7回目
resetBonusThroughCeiling: 最大5スルー
resetGakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- resetBehaviorの「内部状態」は資料ごとに用語粒度が異なる。すろぱちくえすとは `内部モード` の設定変更RESET/電断CARRY_OVERを明記、Altemaは `内部状態` の電断側を調査中としているため、モードと高確等の状態を分離し、電断時の非モード内部状態はPARTIAL扱い。
- ベースは主要スペック資料で33.8G、朝一攻略記事で約34G。丸め差として原値33.8Gを採用。

## missingFields
- 純電源OFF→ON時のモード以外の内部高確/状態詳細: PARTIAL_DIRECT_SOURCE
- リールガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用の追加冷遇数値: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-14
- コナミアミューズメント公式発売発表: https://www.konami.com/amusement/corporate/ja/topics/20250414/
- 公式機種サイト: https://www.konami.com/amusement/psm/slot/watakon/00_top.html
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-4006/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0052/
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10270
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/87175/
- 必勝本 AT解説: https://p.hisshobon.jp/machine/4519/1/110927
- 必勝本 通常時解説: https://p.hisshobon.jp/vpage/2714/4
- 1geki オンライン遊技説明: https://1geki.jp/slot/l_watakon/39/
- 1geki ベース: https://1geki.jp/slot/l_watakon/4/
- すろぱちくえすと 天井/朝一/リセット: https://www.slopachi-quest.com/article/watasinosiawasenakekkon-tenjou/
- Altema 朝一リセット: https://altema.jp/pachimo/lwatakonreset
- Altema 天井: https://altema.jp/pachimo/lwatakontenjo
- 6確: https://www.kaku6.jp/slot/watakon/
- パチビー: https://www.pachibee.jp/machines/index/225060003
