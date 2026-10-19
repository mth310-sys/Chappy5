# No.1193 マジカルハロウィン6

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: マジカルハロウィン6
- manufacturer: KPE / コナミアミューズメント
- releaseDateCanonical: 2018-05-21
- generation: 5.9号機 / 5号機
- systemType: A+ART
- formalModelName: `マジカルハロウィン6／KK`
- certificationNumber: `7S1520`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE、K-Navi、ちょんぼりすた、すろぱちくえすとの導入後資料は2018-05-21で一致。
- Amusement Japanの2018-02-26発表会記事は「ホール導入は5月20日の予定」とする。事前予定値と導入後実績値を平均・混同せず、canonicalは複数の導入後資料が一致する2018-05-21とする。

## performanceCore

### payoutRateBySetting
- setting1: 97.7%
- setting2: 98.9%
- setting3: 100.5%
- setting4: 104.2%
- setting5: 107.8%
- setting6: 110.2%

### initialHitBySetting
ボーナス合算:
- setting1: 1/177.12
- setting2: 1/173.38
- setting3: 1/169.78
- setting4: 1/163.02
- setting5: 1/159.84
- setting6: 1/156.04

ART「カボチャンス」初当たり:
- setting1: 1/364.73
- setting2: 1/363.48
- setting3: 1/362.26
- setting4: 1/360.13
- setting5: 1/359.13
- setting6: 1/357.56

### baseGamesPer50
- 約32.8G/50枚（資料上の丸め表現では約33G）。

### netIncrease
- ART純増: 約1.0枚/G。

### basicPayout
- 赤7同色BIG: 256枚。
- 異色BIG: 176枚。
- 鬼ボーナス: 約136枚。
- REG: 64枚。

### ceiling
- 通常ゲーム数天井: 非搭載。
- 5.9号機の有利区間1500G上限は通常時のゲーム数天井として扱わない。

## modeSpecificMinimumData
- ART「カボチャンス」: 1セット30G+α、セットストック型、純増約1.0枚/G。
- 通常時内部状態は通常A / 通常B / 高確A / 高確B。通常A以外は有利区間滞在状態と解析されている。
- 有利区間は最大1500Gで終了する5.9号機仕様。
- 実機完全再現用の全状態移行率・全ストック抽選は物差し範囲外。

## resetBehavior

### settingChangeBehavior
- コナミ公式開発者回答では、通常の設定変更でRT状態はクリアされず引き継ぐ。本機はボーナス成立中ならボーナスも設定変更後に保持される。
- 有利区間は設定変更時に初期化され、非有利区間へ移行することをコナミ公式開発者回顧で確認。
- 液晶は一撃の本機専用比較表で賀慕神社ステージ開始。

### carryOverBehavior
- 据え置き時の本機固有の全状態契約を単独で網羅する直接表は確認できない。
- 有利区間ランプ/内部状態は純電源OFF→ONでは引き継ぐことを本機朝一解析で確認しており、据え置き判別上の材料になる。
- 据え置きと純電断を同義にはせず、設定変更との差としてのみ記録する。

### powerCycleBehavior
- RT状態: 引き継ぐ（一撃の本機専用比較表）。
- 有利区間ランプ: 引き継ぐ（当時朝一解析）。
- 内部状態: 引き継ぐ（当時朝一解析）。
- 液晶ステージ: 賀慕神社ステージが基本。ただし有利区間滞在中はステージを引き継ぐ（一撃）。

### gameCounterReset
- `NOT_APPLICABLE_NO_NORMAL_GAME_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_NORMAL_GAME_CEILING`。

### modeAfterReset
- 設定変更後は有利区間が初期化され非有利区間から開始。
- RT状態は設定変更で引き継ぐため、RTと有利区間の初期化契約は別物として扱う。
- 設定変更時の通常A/B・高確A/Bの数値振り分けは、十分な再探索後も直接固定できず`UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 有利区間に紐づく内部状態: 設定変更でリセット、純電源OFF→ONで引き継ぐという当時解析あり。
- RT状態: 設定変更でも保持されることを公式開発者回答で確認。
- よって「内部状態」と「RT状態」を混同しない。

### advantageousSectionReset
- 設定変更: リセット / 非有利区間へ移行（コナミ公式開発者回顧）。
- 電源OFF→ON: 有利区間ランプおよび内部状態を引き継ぐ（当時朝一解析）。
- 有利区間上限: 1500G。

### resetBenefits
- 通常ゲーム数天井: 非搭載のため短縮天井なし。
- 設定変更専用の出玉優遇・朝一専用モード・公開された当選率上昇値は`NONE_CONFIRMED_AFTER_RESEARCH`。
- RT状態を設定変更でも引き継ぐため、前日RT状態次第では朝一挙動に差が出る可能性があるが、これは固定的なリセット恩恵とは扱わない。

### resetPenalties
- 設定変更固有の公開された出玉上の不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプが朝一点灯していれば純電断/据え置き系の材料になる。設定変更では有利区間が初期化される。
- 本機固有ガックン発生条件・設定変更判別率は、機種名/型式/KPE/コナミ/シリーズ名と「設定変更・リセット・朝一・据え置き・電源OFF ON・ガックン」を変えて再探索したが直接固定できず`UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- resetSpecificShortenedCeiling: `NOT_APPLICABLE`
- resetSpecificModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetSpecificHitBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunChangeDetectionRate: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- 設定変更専用の比較可能な朝一当選率/モード振り分け/短縮天井数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts
- `PRE_RELEASE_DATE_2018_05_20_VS_POST_RELEASE_2018_05_21`
  - Amusement Japan事前発表会記事: ホール導入5月20日予定。
  - HAZUSE/K-Navi/ちょんぼりすた/すろぱちくえすと: 2018-05-21導入。
  - 実績ベースcanonicalは2018-05-21。
- reset資料間で一撃/ちょんぼりすた初期資料に「内部状態 調査中」が残る一方、後続の朝一解析では設定変更リセット・電断引継ぎが掲載される。古い「調査中」を競合値にはせず、後続直接資料を採用。

## missingFields
- 設定変更時の通常A/B・高確A/Bの具体的初期振り分け。
- 本機固有ガックン条件/発生率。
- 据え置きという独立条件での全RT/ボーナス/液晶状態契約を一表で示す資料。

## sources
取得日: 2026-09-10

1. HAZUSE — マジカルハロウィン6
   - https://hazuse.com/machine/pachislot/7S1520/
   - 型式`マジカルハロウィン6／KK`、検定番号`7S1520`、導入2018-05-21、機械割、ボーナス獲得性能、天井非搭載。
   - confidence: `INDUSTRY_DB_HIGH`
2. Amusement Japan — 今度はも～っと楽しい!! 『マジカルハロウィン6』プレス発表会
   - https://amusement-japan.co.jp/article/detail/10000530/
   - KPE製、A+ART、事前ホール導入予定5/20。
   - confidence: `INDUSTRY_PRIMARY_PRE_RELEASE`
3. 一撃 — ボーナス確率
   - https://1geki.jp/slot/s_magihallo6/1/
   - ボーナス合算、ART初当たり。
   - confidence: `ANALYSIS_HIGH`
4. 一撃 — ART概要
   - https://1geki.jp/slot/s_magihallo6/81/
   - ART純増約1.0枚/G、1セット30G+α。
   - confidence: `ANALYSIS_HIGH`
5. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_magihallo6/3/
   - 天井非搭載、設定変更/電源OFF→ON時のRT・液晶ステージ比較。
   - confidence: `ANALYSIS_HIGH`
6. ちょんぼりすた — マジカルハロウィン6
   - https://chonborista.com/slot/kpe-slot/56238/
   - 導入、32.8G/50枚、純増、初当たり、機械割、獲得枚数、天井非搭載、有利区間。
   - confidence: `ANALYSIS_HIGH`
7. 期待値見える化 — マジカルハロウィン6 有利区間・朝一リセット
   - https://slotjin.com/slot/magihallo6/
   - 設定変更時の有利区間ランプ消灯/内部状態リセット、電源OFF→ON引継ぎ。
   - confidence: `ANALYSIS_HIGH`
8. KONAMI公式 まじおつ。2018-06-01
   - https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_19/20180601.html
   - 開発者回答: 通常の設定変更ではRTも成立ボーナスもクリアされない。RAMクリアとの違い。
   - confidence: `OFFICIAL`
9. KONAMI公式 本気おつ。2024-01-26
   - https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_25/20240126.html
   - 開発者回顧: ハロ6は設定変更でRTを保持、有利区間は設定変更時に初期化され非有利区間へ移行。
   - confidence: `OFFICIAL_RETROSPECTIVE`

## researchNotes
- resetBehaviorは「RT状態」「有利区間/内部状態」を分離して記録。設定変更で有利区間は初期化されるが、RTは本機では保持されるという公式説明を優先した。
- RAMクリア時の特殊初期RTは通常の設定変更とは別操作なので、ホールの通常設定変更契約へ混入させていない。
- 朝一ガックン・設定変更時モード振り分けは表記揺れ/型式/メーカー/シリーズ名を含め再探索したが確定資料に到達しなかった項目のみ欠損扱いとした。
