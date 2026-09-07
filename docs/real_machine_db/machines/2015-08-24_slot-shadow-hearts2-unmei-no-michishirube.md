# SLOTシャドウハーツII-運命の道標-

machineName: SLOTシャドウハーツII-運命の道標-
manufacturer: ユニバーサルブロス
releaseDate: 2015-08-24
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: HAZUSE・当時解析で2015-08-24導入開始が一致。メーカー公式は2015年8月発売を確認。
generation: 5号機
systemType: A+ART / ボーナス+ART
formalModelName: シャドウハーツII運命の道標SS
inspectionNumber: 5S0365
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **ユニバーサルブロス**。
- canonical導入日: **2015-08-24**。
- 型式名: **シャドウハーツII運命の道標SS**。
- 検定番号: **5S0365**。
- メーカー公式で5号機・ボーナス+ART・2015年8月発売を確認。
- confidence: OFFICIAL_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.7% |
| 2 | 99.5% |
| 3 | 102.5% |
| 4 | 106.4% |
| 5 | 110.7% |
| 6 | 115.1% |

- 当時解析掲載値。設定別ボーナス/ART表と同一資料系列で確認。
- confidence: ANALYSIS_HIGH

## initialHitBySetting

| 設定 | ボーナス合算 | ART初当たり |
|---:|---:|---:|
| 1 | 1/200 | 1/499 |
| 2 | 1/195 | 1/469 |
| 3 | 1/200 | 1/460 |
| 4 | 1/190 | 1/377 |
| 5 | 1/200 | 1/368 |
| 6 | 1/165 | 1/325 |

- 主要初当たりとしてボーナス合算とART初当たりを分離保存。
- 通常時ART直撃の実質当選率（天井救済含む）には別系列 1/1681.1 ～ 1/749.4 が存在するが、これは上表ART初当たりと定義が異なるため競合扱いせず定義分離。
- confidence: ANALYSIS_HIGH

## baseGamesPer50

- **約31.7G/50枚**。
- confidence: ANALYSIS_HIGH

## netIncrease

- ART単体: **約1.5枚/G**。
- ボーナス込みART区間: **約2.1枚/G**。
- P-WORLD、パチマガスロマガ、当時解析でボーナス込み約2.1枚/Gを照合。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- 幻影ボーナス: **約102～104枚**（資料表現差。P-WORLD 102枚、パチマガスロマガ約104枚）。
- 再生の刻: **約102枚**。
- 天凱凰BONUS: **204枚**。
- ART「幻影RUSH」: **1セット30G+α**。フュージョンドライヴ・継続バトル込みでは約60G/セット相当の説明もある。
- 獲得枚数102/104枚は丸め・純増表現差とみられるが平均せず両表記を保持。

## modeSpecificMinimumData

- 通常天井: **ボーナス間777G**。
- 天井恩恵: **50%継続以上のART確定**。
- ART継続率: 50～80%。
- 天国型の規定G解除モードは確認されず、通常時は内部状態（通常/高確/超高確準備/超高確）を用いる。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は**ボーナス間777G天井をリセット**。
- 内部状態は**再抽選**。
- 液晶ステージは基本**ドンレミ村**。
- ART中の鍵チャンス目制御に関わるモードは設定変更時に専用抽選があり、リセットモードへ移行する可能性が高い。

### carryOverBehavior

- 設定据え置きは設定変更処理を行わないため、少なくとも当時朝一攻略上は天井宵越し対象として扱われる。
- 純電断資料では天井・内部状態を引き継ぐことが明記されており、通常営業の据え置きもCARRYOVER扱い。
- グレイヴヤード、ART、ボーナス中の状態は電断後も表示/状態を引き継ぐ例外がある。

### powerCycleBehavior

- 設定変更を伴わない**電源OFF→ON**では、**天井を引継ぎ、内部状態も引継ぎ**。
- 通常時の開始ステージは基本ドンレミ村。ただし**グレイヴヤード・ART・ボーナス中は引継ぎ**。

### gameCounterReset

- 設定変更: **RESET**（ボーナス間777G）。
- 据え置き/純電源OFF→ON: **CARRYOVER**。

### ceilingAfterReset

- 通常天井: **ボーナス間777G**。
- 設定変更専用の短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更は進捗を0から再開するため、前日ハマリ分の宵越し恩恵を失う。

### modeAfterReset

- 規定G数解除の通常A/B・天国等は本機の主要構造として確認されない。
- 一方、ART中の鍵チャンス目用モードは設定変更時に以下で抽選:
  - リセット: **74.22%**
  - LOW: **0.39%**
  - MID: **25.00%**
  - HI: **0.39%**
- リセットモードでの実質鍵チャンス目出現率: **1/122.1**。
- これは通常時ゲーム数解除モードではなく、鍵チャンス目制御用モードとして定義分離する。

### stateAfterReset

設定変更時の内部状態振り分け:

| 設定 | 通常 | 高確 |
|---:|---:|---:|
| 1～3 | 75% | 25% |
| 4～5 | 67% | 33% |
| 6 | 60% | 40% |

- 高設定ほど設定変更時高確スタート率が高い。
- 超高確準備/超高確を含む通常時の全状態移行表は物差し用途外のため収集しない。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits

- 設定変更時は内部状態再抽選により、高確スタート率が設定1～3の25%から設定6の40%まで設定差あり。
- 鍵チャンス目用モードは設定変更時専用抽選があり、リセット74.22% / MID25.00%が中心。
- 一律の天井短縮は確認されない。

### resetPenalties

- 設定変更でボーナス間天井進捗がリセットされるため、前日ハマリの宵越し価値は消失。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection

- 電源OFF→ONのみでは基本ドンレミ村だが、**グレイヴヤード・ART・ボーナス中は引継ぐ**ため、朝一にドンレミ村以外から始まれば据え置き濃厚とする当時解析あり。
- 朝一の早い段階で高確示唆（ウェールズ夕方）を確認した場合、高設定期待度が若干上がるが、設定変更そのものの確定判別ではない。
- 本機固有のガックン契約: **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData

- 設定変更時内部状態: 設定1～3 通常75%/高確25%、設定4～5 通常67%/高確33%、設定6 通常60%/高確40%。
- 設定変更時鍵チャンス目用モード: リセット74.22% / LOW0.39% / MID25.00% / HI0.39%。
- リセットモード実質鍵チャンス目: 1/122.1。
- 設定変更専用短縮天井: NONE_CONFIRMED_AFTER_RESEARCH。

## conflicts

1. `MINOR_BASIC_PAYOUT_DISPLAY_DIFFERENCE`
   - 幻影ボーナス: P-WORLD **102枚**、パチマガスロマガ **約104枚**。
   - 平均せず両表記を保持。払い出し/純増・丸め定義差の可能性があるためcanonical単一値へ強制統合しない。
2. `NET_INCREASE_DEFINITION_SEPARATED`
   - ART単体 **約1.5枚/G** とボーナス込み **約2.1枚/G** は異なる定義。CONFLICTではなく定義分離。

## missingFields

- 本機固有ガックンによる変更判別: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一特定ゲーム数以内の当選率: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. ユニバーサルエンターテインメント公式「SLOTシャドウハーツII-運命の道標-」 — https://www.universal-777.com/product/slot/shadowhearts2_unmei/
   - ユニバーサルブロス、5号機、ボーナス+ART、2015年8月発売を確認。
2. HAZUSE「SLOTシャドウハーツⅡ－運命の道標－」 — https://hazuse.com/machine/pachislot/5S0365/
   - 型式シャドウハーツII運命の道標SS、検定5S0365、導入開始2015-08-24を確認。
3. ちょんぼりすた「シャドウハーツ2 運命の道標」 — https://chonborista.com/slot/universal-slot/10311/
   - 設定別ボーナス/ART/機械割、約31.7G/50枚、純増、777G天井、設定変更/電断時挙動、設定変更時高確振り分けを確認。
4. パチマガスロマガ「SLOTシャドウハーツⅡ-運命の道標-」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/universalbros_slot/02/l.php
   - 幻影ボーナス約104枚、ART約2.1枚/G（ボーナス込み）、1セット30G+α、ゲーム性を照合。
5. P-WORLD「SLOTシャドウハーツII-運命の道標-」 — https://www.p-world.co.jp/machine/database/7788
   - 5号機ART、ボーナス基本獲得枚数、ART1セット30G以上、約2.1枚/G（ボーナス込み）を照合。
6. パチ＆スロ必勝本「鍵チャンス目詳細」 — https://p.hisshobon.jp/machine/2617/1/53896
   - 設定変更時の鍵チャンス目用モード振り分け、リセットモード実質1/122.1を確認。
7. パチ＆スロ必勝本「ART抽選」 — https://p.hisshobon.jp/machine/2617/1/54160
   - 通常/高確等の内部状態構造、通常時ART直撃実質当選率を定義確認用に使用。

## researchNotes

- 「SLOTシャドウハーツII / シャドウハーツ2 / 運命の道標 / 型式5S0365」×「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 高確 / モード / ガックン」で再探索。
- メーカー公式、HAZUSE、P-WORLD、当時攻略（パチマガスロマガ/必勝本）、当時～後年解析を横断。
- 設定変更・据え置き・純電断は同義化せず、本機固有記述が取れた項目のみ確定。
- 完全再現用の全小役別ART抽選、全状態移行、FD内部抽選は収集対象外。
