# スロット ゾンビランドサガ

recordNo: 1665
machineName: スロット ゾンビランドサガ
aliases: Lゾンビランドサガ / スマスロ ゾンビランドサガ / ゾンサガ
manufacturer: 大都技研
formalModel: Lスロット ゾンビランドサガA1
inspectionCode: 3S1702
releaseDate: 2024-07-22
generation: 6.5号機 / スマスロ
systemType: AT / リアルボーナス+ST型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- 大都技研公式製品一覧で2024年7月導入を確認。
- 遊技日本の2024-06-11業界発表で型式 `Lスロット ゾンビランドサガA1` と基本スペックを確認。
- P-WORLD・HAZUSEで検定番号 `3S1702`、導入開始日2024-07-22、型式を照合。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.9%
- setting2: 98.6%
- setting3: 100.5%
- setting4: 105.1%
- setting5: 108.1%
- setting6: 111.2%
initialHitBySetting:
- setting1: 徒花ボーナス 1/227.4 / ST 1/529.3 / 合算 1/159.0
- setting2: 徒花ボーナス 1/225.5 / ST 1/515.1 / 合算 1/156.8
- setting3: 徒花ボーナス 1/219.4 / ST 1/481.7 / 合算 1/150.8
- setting4: 徒花ボーナス 1/213.6 / ST 1/405.0 / 合算 1/139.9
- setting5: 徒花ボーナス 1/205.6 / ST 1/372.9 / 合算 1/132.6
- setting6: 徒花ボーナス 1/200.6 / ST 1/352.8 / 合算 1/127.9
baseGamesPer50: 約37G/50枚（設定1基準）
netIncrease:
- ST/プレミアムAT区間: 約3.0枚/G
- フランシュシュボーナス等: 約3.8枚/G
basicPayout:
- ST「ゾンビランドサガ」: 30G+α / 継続率約77%
- 上位ST「ゾンビランドサガリベンジ」: 40G+α / 継続率約90%
- プレミアムAT「ネバーエンディングサガ」: 40G+α / 継続率約95% / 純増約3.0枚/G
- フランシュシュボーナス: 100 / 200 / 300枚の差枚数管理 / 純増約3.8枚/G
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はSAGA揃い・CZ・リアルボーナス「徒花ボーナス」からST突入を目指す。
- 通常天井は徒花ボーナス・ST間777G消化、またはST間斜めSAGA揃い30回成立。到達後はST当選までCZ超高確へ移行。
- CZ合算は設定1 1/196.6〜設定6 1/157.3として主要解析に公開あり。ただし物差し必須コアは初当り合算/ST初当りを優先。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GAKKUN_AND_POWER_CYCLE_STAGE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 徒花ボーナス・ST間の天井ゲーム数RESET。
- ST間斜めSAGA揃い回数天井RESET。
- SAGA揃い状態を再抽選。
- CZ高確/超高確は非高確側へリセット。
- ロメロポイントはリセット後に初期ポイント抽選。
- LIVEポイントRESET。
- 実戦上は屋敷ステージ開始とする必勝本資料あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間・天井・内部状態・ロメロポイントを引継ぐ。
- 設定変更専用555G天井短縮は発生しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 天井ゲーム数: CARRY_OVER。
- 斜めSAGA揃い回数天井: CARRY_OVER。
- SAGA揃い状態: CARRY_OVER。
- CZ高確/超高確: CARRY_OVER。
- ロメロポイント: CARRY_OVER。
- LIVEポイント: CARRY_OVER。
- 有利区間: CARRY_OVERとする機種専用比較資料あり。
- ステージ復帰位置: 主要比較資料でも調査中のため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: 徒花ボーナス・ST間天井G数、およびST間斜めSAGA揃い回数をRESET。
- 据え置き/純電源OFF→ON: 双方をCARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常ゲーム数天井777Gに対し、設定変更後は555Gへ短縮。
- 斜めSAGA揃い30回天井は設定変更時に進行度RESET。設定変更専用の回数短縮は確認できず通常30回契約。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- SAGA揃い低確/高確の状態を再抽選。
- 必勝本は設定変更時のSAGA揃い高確移行を50%と明記。
- 据え置き/純電断はSAGA揃い状態を引継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- CZ高確/超高確は設定変更時に非高確側へ。
- ロメロポイントは設定変更時にRESETし、同時に初期ポイント獲得抽選。
- LIVEポイントは設定変更時RESET。
- 純電源OFF→ONでは上記状態を引継ぐ。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常営業中はエンディング到達時にも有利区間RESETし、上位STまたはプレミアムATへ繋がるツラヌキ挙動がある。朝一設定変更契約とは分離して扱う。
confidence: ANALYSIS_HIGH

### resetBenefits
- ゲーム数天井が777Gから555Gへ短縮。
- 設定変更時は50%でSAGA揃い高確へ移行。
- ロメロポイントは単純ゼロ固定ではなくリセット後に初期ポイント抽選あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 蓄積していたロメロポイント、LIVEポイント、斜めSAGA揃い回数天井進行、CZ高確等は設定変更で失われる。
- 上記は据え置きなら引継がれるため、前日状況によっては設定変更が客側に不利となり得る。
confidence: ANALYSIS_HIGH

### resetDetection
- 設定変更後のゲーム数天井は555G。徒花ボーナス/ST間で555Gを超えても天井契機が成立しない場合は据え置き推測材料。
- 前日からロメロポイント示唆やLIVEポイント、斜めSAGA揃い回数示唆が明確に継続している場合は据え置き推測材料。
- なな徹の機種別リセット判別は「現在調査中」。本機固有のガックン条件・固定発生率は機種名/型式/メーカー名 + 設定変更/リセット/据え置き/電源OFF ON/ガックンで再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_AND_STATE / UNVERIFIED_FOR_GAKKUN

### numericResetData
- 設定変更後ゲーム数天井: 555G
- 通常ゲーム数天井: 777G
- ST間斜めSAGA揃い天井: 30回
- 設定変更時SAGA揃い高確移行率: 50%
- SAGA揃い高確中SAGA揃い確率: 約1/8.9
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### publicMorningNumbers
- 555G: 設定変更後の徒花ボーナス・ST間短縮天井。
- 50%: 設定変更時のSAGA揃い高確移行率。
- SAGA揃い高確中はSAGA揃い約1/8.9。

## conflicts
- 主要コア数値・555G短縮天井・50% SAGA高確移行について、今回確認範囲で実質的競合なし。
- 一部二次資料には設定変更後の「内部G数ランダム加算」を記載するものがあるが、主要解析横断で十分な固定値・同等記述を確認できないためcanonical reset契約には採用しない。

## missingFields
- powerCycleBehavior.stage: UNVERIFIED_AFTER_RESEARCH
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## groupAudit
- 2024-07-22 canonical群は4機: `ミスタージャグラー / 賞金首Angel / スロット ゾンビランドサガ / スマスロ ゴッドイーター リザレクション`。
- 本機は同日群3/4として処理。
- 残り `スマスロ ゴッドイーター リザレクション` 処理後、PB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## sources
取得日: 2026-09-14
- 大都技研 公式製品一覧: https://www.daitogiken.com/products/slot/
- 遊技日本 業界発表: https://yugi-nippon.com/pachinko-new-machine/post-65295/
- 長崎県遊技業協同組合 / 遊技通信転載: https://nagasaki-yukyo.or.jp/information/%E3%83%84%E3%83%A9%E3%83%8C%E3%82%AD%E3%82%92%E8%B6%85%E3%81%88%E3%81%9F%E3%83%A8%E3%83%9F%E3%82%AC%E3%82%A8%E3%83%AA%E3%82%B9%E3%83%9A%E3%83%83%E3%82%AF%E8%AA%95%E7%94%9F%EF%BC%81%E3%80%8C%E3%82%B9/
- P-WORLD: https://www.p-world.co.jp/machine/database/10072
- HAZUSE: https://hazuse.com/hd/3s1702/
- 1geki 基本解析: https://1geki.jp/slot/l_zombielandsaga/
- 1geki ロメロポイント: https://1geki.jp/slot/l_zombielandsaga/49/
- パチ&スロ必勝本 基本スペック/設定変更比較: https://p.hisshobon.jp/vpage/2637/2
- パチ&スロ必勝本 SAGA揃い状態: https://p.hisshobon.jp/vpage/2637/4
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/776/22678/
- なな徹 初当たり/機械割: https://nana-press.com/kaiseki/machine/776/22252/
- ちょんぼりすた 天井/朝一: https://chonborista.com/slot/daito-slot/213811/
- K-Navi: https://p-kn.com/slot/4172/
