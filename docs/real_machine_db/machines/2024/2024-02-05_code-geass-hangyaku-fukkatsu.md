# スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ

recordNo: 1621
machineName: スマスロ コードギアス 反逆のルルーシュ／復活のルルーシュ
aliases: Lコードギアス / スマスロコードギアス / コードギアス4
manufacturer: サミー
formalModel: Lコードギアス復活のルルーシュZS
inspectionCode: 3S0863
releaseDate: 2024-02-05
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス経由 + セット継続型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パチ&スロ必勝本、なな徹、一撃、HAZUSE等の主要解析で2024-02-05導入が一致。
- サミー発表を扱う2023-11-20〜21の業界記事では2024年2月上旬導入予定とされ、実導入日と整合する。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技通信および遊技日本の業界記事で型式名 `Lコードギアス復活のルルーシュZS` を確認。
- HAZUSE機種DBで検定番号 `3S0863` / 型式名 `Ｌ コードギアス復活のルルーシュＺＳ` / メーカーSammyを確認。
confidence: INDUSTRY / ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- 1: 97.9%
- 2: 98.8%
- 3: 101.5%
- 4: 106.0%
- 5: 109.9%
- 6: 113.4%
initialHitBySetting:
- setting1: ボーナス 1/282.9 / AT 1/439.5
- setting2: ボーナス 1/278.1 / AT 1/432.1
- setting3: ボーナス 1/260.6 / AT 1/403.3
- setting4: ボーナス 1/244.1 / AT 1/355.9
- setting5: ボーナス 1/229.2 / AT 1/320.3
- setting6: ボーナス 1/217.5 / AT 1/296.1
baseGamesPer50: 約32.3G/50枚
netIncrease: 約2.8枚/G（擬似ボーナス / AT）
basicPayout:
- 通常時BIG: 30G、純増約2.8枚/G、AT期待度約40%
- エピソードボーナス: 30G、純増約2.8枚/G、突入時点でAT濃厚
- AT「Lelouch of the Re;surrection」: 1セット30G+α、純増約2.8枚/G
- セット終盤のナイトメアバトル勝利で次セット継続
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は規定ゲーム数到達時の抽選またはCZ成功から擬似ボーナスを目指し、主にボーナス経由でATへ突入する。
- 通常AT間最大天井は1000G+α。ボーナス当選ではAT間天井ゲーム数はリセットされない。
- モード別天井: モードA 1000G+α / モードB 700G+α / モードC 950G+α / モードD（天国）100G+α / リセットモード700G+α。
- 設定変更時のみリセットモードへ移行する。
- AT終了後は40G間の引き戻し高確率状態が存在。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_START_STAGE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- AT間ゲーム数 / 天井進行RESET。
- 内部モードは通常モードではなく設定変更専用の「リセットモード」へ移行。
- 内部状態RESET。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は設定変更処理が行われないため、天井進行・内部モード・内部状態・有利区間をCARRY_OVERと扱う。
- 機種固有の設定変更/電源OFF ON比較資料では純電断時に同各項目が引き継がれることを確認しており、据え置き契約と整合する。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。
- 有利区間CARRY_OVER。
- 電断後の開始ステージは機種固有比較資料でも調査中のため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CARRY_OVER_ITEMS / UNVERIFIED_FOR_START_STAGE

### gameCounterReset
- 通常のAT間最大天井は1000G+α。
- 設定変更時はAT間ゲーム数をRESETし、リセットモードの700G+α天井を適用。
- 据え置き / 純電源OFF→ONではAT間天井進行をCARRY_OVER。
- 通常時ボーナスに当選してAT非当選でもAT間通常ゲーム数は引き継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 設定変更後はリセットモードへ移行し、AT間最大天井が通常最大1000G+αから700G+αへ短縮。
- リセットモードでは100G台・200G台・400G台・500G台がボーナス当選のチャンスゾーン。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は専用リセットモードへ移行。
- リセットモード天井は700G+α。
- 据え置き / 純電断では内部モードCARRY_OVER。
- リセットモード内の各規定ゲーム数選択率・ボーナス当選率など完全振り分けの公開固定値は再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_MODE_CONTRACT / PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH_FOR_DISTRIBUTION

### stateAfterReset
- 設定変更時: 内部状態RESET。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更専用の状態振り分け率は公開固定値を確認できず。
confidence: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 設定変更以外にもAT終了時の一部・エンディング終了時に有利区間がリセットされるとする後年解析がある。設定変更以外の有利区間リセット時は「アラムの門」へ移行するが、設定変更時の朝一恩恵とは区別する。
confidence: ANALYSIS_HIGH

### resetBenefits
- 設定変更専用リセットモードへ移行し、AT間最大天井が700G+αへ短縮。
- 設定変更後の初回ボーナスは約25%でエピソードボーナスが選択される。
- エピソードボーナスは当選時点でAT濃厚。
- リセットモードでは100/200/400/500G台がボーナスのチャンスとなり、通常モードより早い初当たりを狙いやすい。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 前日のAT間ゲーム数・内部モード・内部状態は設定変更で消去されるため、深いハマりや有利な内部状態を保持していた場合は据え置きに比べ客側の期待値を失う可能性がある。
- 固定的な設定変更専用ペナルティ率・不利率の公開数値は確認できず。
confidence: ANALYSIS_HIGH_FOR_RESET_ITEMS / PUBLIC_VALUE_NOT_FOUND_FOR_NUMERIC_PENALTY

### resetDetection
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 設定変更後は最大700G+αでAT当選となるため、朝一700Gを超えてAT非当選なら据え置き濃厚材料となる。
- 設定変更後の見た目単独判別は困難とする解析あり。
- 本機固有のリールガックン条件・発生率は「スマスロコードギアス / Lコードギアス復活のルルーシュZS / サミー」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」で再探索したが、信頼できる機種固有条件を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_700G_DETECTION_AND_LAMP / UNVERIFIED_FOR_GACKUN

### numericResetData
- 設定変更後AT間天井: 700G+α（通常最大1000G+αから短縮）。
- リセットモードの主要チャンス帯: 100G台 / 200G台 / 400G台 / 500G台。
- 設定変更後初回ボーナスのエピソードボーナス期待度: 約25%。
- 設定変更専用モード完全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 朝一特定G数以内AT当選率の設定変更専用固定値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 設定変更後AT間最大天井: 700G+α。
- 設定変更後初回ボーナスのエピソードボーナス期待度: 約25%。
- リセットモードの主要ゾーン: 100 / 200 / 400 / 500G台。

## conflicts
- 有利区間の設定変更時RESETは主要解析で一致。なな徹2024-03時点では「判明しているリセットタイミングは設定変更時のみ」と記載する一方、後年の機種固有解析ではAT終了時の一部・エンディング終了時もリセットタイミングとして掲載。これは解析更新時期の差とみなし、設定変更契約は一致、通常運用中の追加リセット契機は後年解析を別記している。
- 主要性能値（機械割、ボーナス/AT初当たり、純増、ベース）について実用上の数値競合は今回確認されず。

## sources
取得日: 2026-09-13
1. 遊技通信 / P-WORLD — 型式名、純増、ボーナス/AT初当たり、2024年2月上旬導入予定
   - https://news.p-world.co.jp/articles/26066/yugitsushin
   - reliability: INDUSTRY
2. 遊技日本 / P-WORLD — サミー発売発表、型式名、スペック、導入時期
   - https://news.p-world.co.jp/articles/26051/nippon
   - reliability: INDUSTRY
3. グリーンべると / P-WORLD — 純増、初当たりレンジ、50枚ベース約32.3G
   - https://news.p-world.co.jp/articles/26064/greenbelt
   - reliability: INDUSTRY
4. 遊技日本 / P-WORLD — AT 30G+α/セット、純増約2.8枚/G、ゲーム性
   - https://news.p-world.co.jp/articles/26208/nippon
   - reliability: INDUSTRY
5. HAZUSE — 型式 `Lコードギアス復活のルルーシュZS`、検定番号3S0863、導入日、ベース、天井
   - https://hazuse.com/pachislot/3s0863/
   - reliability: ANALYSIS_HIGH / MACHINE_DATABASE
6. パチ&スロ必勝本 — 設定別ボーナス/AT確率・機械割、2024-02-05導入
   - https://hisshobon.com/machineinfo/82423/
   - reliability: ANALYSIS_HIGH
7. なな徹 — 設定別ボーナス/AT確率・機械割
   - https://nana-press.com/kaiseki/machine/683/18697/
   - reliability: ANALYSIS_HIGH
8. なな徹 — 朝一/設定変更、リセットモード700G+α、初回EP約25%
   - https://nana-press.com/kaiseki/machine/683/19030/
   - reliability: ANALYSIS_HIGH
9. なな徹 — 有利区間リセット、設定変更時RESET、有利区間ランプ判別不可
   - https://nana-press.com/kaiseki/machine/683/19031/
   - reliability: ANALYSIS_HIGH
10. 一撃 — 天井/モード/リセットモード700G+α、初回EP約25%
    - https://1geki.jp/slot/l_codegeass/3/
    - reliability: ANALYSIS_HIGH
11. 一撃 — 通常モード/AT間ゲーム数引継ぎ
    - https://1geki.jp/slot/l_codegeass/43/
    - reliability: ANALYSIS_HIGH
12. ぽこすろっと — 設定変更 vs 電源OFF→ON比較、天井/モード/状態/有利区間のRESET・CARRY_OVER、朝一恩恵
    - https://www.nankaikoya.jp/codegeass-revival-kitaichi/
    - reliability: ANALYSIS_SINGLE_HIGH_DETAIL
13. パチ&スロ必勝本 — 通常時BIG/EPボーナス各30G、純増約2.8枚/G、AT期待度
    - https://hisshobon.com/machineinfo/82415/
    - reliability: ANALYSIS_HIGH

## missingFields
- settingChangeSpecificModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetSpecificATProbabilityWithinFixedGames: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetStartStage: UNVERIFIED_AFTER_RESEARCH
- reelGackunContract: UNVERIFIED_AFTER_RESEARCH
