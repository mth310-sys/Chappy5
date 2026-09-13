# ドラゴンハナハナ～閃光～-30

recordNo: 1614
machineName: ドラゴンハナハナ～閃光～-30
aliases: Sドラゴンハナハナ～閃光～30 / ドラゴンハナハナ閃光30 / ドラハナ閃光30
manufacturer: パイオニア
formalModel: Sドラゴンハナハナ～閃光～SP-30
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2023-12-18
generation: 6号機 / 30Φメダル機
systemType: ノーマルAタイプ / 完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- パチビー、必勝本、ちょんぼりすた等で2023-12-18導入が一致。
- 業界流通資料では納品開始日2023-12-17（地域差あり）。本DBは初回ホール導入日として2023-12-18をcanonical採用。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本の新機種発表記事で型式名 `Sドラゴンハナハナ～閃光～SP-30` を確認。
- 業界流通資料、中古実機DBでも同型式名が一致。
- 個別の検定番号コードは、型式名・メーカー名・検定/公安委員会語を変えて再探索したが今回固定できず `UNVERIFIED_AFTER_RESEARCH`。推測しない。
confidence: INDUSTRY_HIGH_FOR_MODEL / UNVERIFIED_FOR_INSPECTION_CODE

## corePerformance
payoutRateBySetting:
- 1: 97.0%
- 2: 99.0%
- 3: 101.0%
- 4: 104.0%
- 5: 107.0%
- 6: 110.0%
initialHitBySetting:
- setting1: BIG 1/256 / REG 1/642 / total 1/183
- setting2: BIG 1/246 / REG 1/585 / total 1/173
- setting3: BIG 1/235 / REG 1/537 / total 1/163
- setting4: BIG 1/224 / REG 1/489 / total 1/153
- setting5: BIG 1/212 / REG 1/442 / total 1/143
- setting6: BIG 1/199 / REG 1/399 / total 1/133
baseGamesPer50: 約39.9G/50枚
netIncrease: N/A（ノーマルタイプ）
basicPayout:
- BIG CHANCE: 最大252枚
- REG CHANCE: 最大96枚
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 天井: 非搭載。
- 通常時の天井ゲーム数・CZ・ATモードは非該当。
- ハイビスカス点灯でボーナス確定。告知割合は当選ゲーム約85%、単独当選の次ゲーム告知約10%、チェリー同時当選の次ゲーム告知約5%と業界記事で公表。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_SINGLE_SOURCE_MORNING_NUMERIC_FIELD
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 天井/規定ゲーム数は非搭載のため、天井RESETはN/A。
- 設定変更後1回目のBIG終了時はフェザーランプ色変化率が通常時より大幅に上がる挙動を機種固有実戦資料で確認。
- 設定変更後1G目はリールガックンが発生するとの機種固有実戦報告あり。ただし個体差があり、変更後に店側が1G回すことで対策可能。
- BET表示は設定変更だけでは前ゲームの掛け枚数表示がそのまま残るとの機種固有観察あり。
confidence: ANALYSIS_SINGLE_FOR_MACHINE_SPECIFIC_RESET_DISPLAY / HIGH_FOR_NO_CEILING

### carryOverBehavior
- 天井非搭載のため天井CARRY_OVERはN/A。
- 機種固有実戦資料では、内部の累計ゲーム数カウントは設定変更しない限り営業日を跨いでも維持される挙動が示され、REG後フェザーランプの発生率変化を利用した据え置き推測が可能とされる。
- ボーナス当選フラグ等の閉店跨ぎ実務挙動は本DBの物差し粒度を超えるため収集対象外。
confidence: ANALYSIS_SINGLE_FOR_INTERNAL_CUMULATIVE_GAME_COUNT

### powerCycleBehavior
- 純電源OFF→ONのみでは内部累計ゲーム数カウントはリセットされないとの機種固有実戦資料あり。
- 必勝本の同系統/スマート版比較表では天井なし、BGM変化条件・ガックンは調査中。メダル30Φ版についても純電断時のBGM条件を高信頼資料で固定できず、一般シリーズ仕様から補完しない。
confidence: ANALYSIS_SINGLE_FOR_INTERNAL_GAME_COUNT / UNVERIFIED_FOR_BGM_AND_GACKUN_POWER_CYCLE

### gameCounterReset
- 天井用ゲーム数: N/A（天井非搭載）。
- REG後フェザーランプ挙動に関係する内部累計ゲーム数カウントは、純電源OFF→ONではCARRY_OVERとの機種固有報告あり。
- 設定変更で同内部累計カウントが初期化されることは、設定変更判別ロジックと整合するが、メーカー一次資料の直接記述は今回固定できず `ANALYSIS_SINGLE` とする。
confidence: ANALYSIS_SINGLE

### ceilingAfterReset
- 天井非搭載。設定変更専用の短縮天井もN/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT/CZ型の通常モード・朝一専用モードは非該当。
- 設定変更後初回BIGのフェザーランプ用リセット状態は存在するが、これはAT/CZモードではなく設定変更判別用の演出状態として分離して扱う。
confidence: ANALYSIS_SINGLE

### stateAfterReset
- 設定変更後初回BIG終了時のフェザーランプ色変化率アップを確認。
- その他の通常/高確等の内部状態概念はノーマル機の本DB比較項目としてN/A。
confidence: ANALYSIS_SINGLE

### advantageousSectionReset
- 通常の有利区間管理を物差しに用いるAT機ではなくノーマルタイプ。本DBの朝一有利区間比較項目はN/A。

### resetBenefits
- 設定変更後初回BIG終了時のフェザーランプ色変化率アップにより、客側が朝一の設定変更推測を行える。
- ちょんぼりすたは「朝イチ100G以内のBIGでレトロサウンドが流れると設定変更の可能性大」と整理。ただし条件・発生率は解析確定値ではないため判別補助扱い。
confidence: ANALYSIS_SINGLE / ANALYSIS_HIGH_FOR_EXISTENCE_OF_MORNING_CUE

### resetPenalties
- 設定変更時固有の主要な定量的不利要素は再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- リールガックン: 機種固有実戦資料で設定変更後1G目に発生との報告。ただし個体差あり、店側の1G回しで対策可能。確定判別ではなく推測材料。
- 初回BIG後フェザーランプ: 設定変更後は色変化しやすく、朝一判別材料。
- 同資料では朝一初回BIG後の虹は据え置き可能性大と整理。
- 内部累計ゲーム数が純電断で維持されるため、前日十分回された台で当日REG後フェザー色変化が発生した場合、設定変更推測材料になり得る。ただし同一設定打ち直し等には注意。
- BETランプ状態は閉店/開店作業でも変わるため単独で確定材料にしない。
confidence: ANALYSIS_SINGLE_MACHINE_SPECIFIC / NON_DEFINITIVE

### numericResetData
- 設定変更確認台の初回BIG後フェザーランプ実戦集計（単一機種特化実戦資料）:
  - 青 16.88%（26/154）
  - 黄 17.53%（27/154）
  - 緑 20.13%（31/154）
  - 赤 18.18%（28/154）
  - 虹 0/154
  - 変化なし 27.27%（42/154）
  - 色変化合算 72.73%
- 上記はメーカー公表値ではなく実戦値。資料著者は約75%前後と推測するが、本DBは72.73%実測値のみを保存し、推測75%をcanonical数値にはしない。

### publicMorningNumbers
- 初回BIG後フェザー色変化実戦値: 72.73%（単一実戦資料、n=154）。
- 朝一100G以内BIG時のレトロサウンド: 設定変更可能性大との解析記述あり。ただし設定変更専用発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- 一部後年サイトに「設定変更後初回フェザー50% or 80%」等の推測表現があるが、固定解析値としての根拠を確認できないため採用しない。
- ガックンについて、機種特化実戦資料は発生を報告する一方、別攻略記事は「恐らくしない？」、スマート版必勝本は「調査中」。平均化せず、メダル30Φ版の機種固有実戦報告を `ANALYSIS_SINGLE` として保持し、確定判別にはしない。

## missingFields
- inspectionCode: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle BGM carry-over contract: UNVERIFIED_AFTER_RESEARCH
- pure power-cycle gackun contract: UNVERIFIED_AFTER_RESEARCH
- reset-specific retro-sound probability: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## groupAudit
- 2023-12-18群のcanonical候補3機のうち本機は2機目。
- `スマスロバジリスク～甲賀忍法帖～絆2 天膳 BLACK EDITION` はNo.1613で処理済み。
- 残る未処理は `パチスロファイヤードリフト`。処理後にPB・別型式・地域先行・延期/段階導入を再監査して群CLOSED判定する。
- 25Φ版 `ドラゴンハナハナ～閃光～` は2024-03-18導入の別市場機であり、本レコードへ混同しない。

## sources
取得日: 2026-09-13
- ALL7 2023年12月導入予定一覧: https://www.all7.jp/plans/index/2023/12
- 遊技日本 新機種発表/型式・公式スペック: https://news.p-world.co.jp/articles/25514/nippon
- パチビー 基本スペック/導入日: https://www.pachibee.jp/machines/index/223110004
- なな徹 基本スペック/ベース: https://nana-press.com/kaiseki/machine/656/17146/
- 必勝本 基本スペック/天井非搭載: https://p.hisshobon.jp/vpage/2575/2
- ちょんぼりすた 基本スペック/朝一リセット示唆: https://chonborista.com/slot/pionia-slot/198883/
- ゼンリン 型式/納品開始日: https://zenrin-net.co.jp/9278/
- ひぐらしの華が咲く頃に 機種特化長期実戦/設定変更挙動: https://ameblo.jp/datyo1062/entry-12840478937.html
- パチマガスロマガ レトロサウンド実戦情報: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/145/en05.php
- 必勝本 スマート版設定変更/電源OFFON比較（同スペック派生の補助確認のみ）: https://hisshobon.com/machineinfo/83057/

## notes
- 実機完全再現用の小役・設定示唆全振り分けは収集しない。
- 初回フェザーの72.73%は公開された実戦値でありメーカー公表値ではないため、信頼度を分離して保存。
