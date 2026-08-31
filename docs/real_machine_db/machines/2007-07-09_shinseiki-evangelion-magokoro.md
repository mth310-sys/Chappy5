# 新世紀エヴァンゲリオン～まごころを、君に～

machineName: 新世紀エヴァンゲリオン～まごころを、君に～
manufacturer: ビスティ
releaseDate: 2007-07-09
generation: 5号機初期
systemType: ボーナス + RT
coreStatus: COMPLETE_CORE
qaResetBehavior: PARTIAL

## releaseDateEvidence

- ALL7.jpの2007年7月導入予定一覧で `2007/07/09`、メーカー `ビスティ` と掲載。
- フィールズ関連の当時業界記事でも2007年7月に市場投入されたことを確認。
- P-WORLD・後年整理資料も2007年7月導入で一致。
- 本DBの時系列本線は具体日が取れるALL7.jpの `2007-07-09` を採用し、予定日であることを注記する。

信頼度: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting

資料系統間で大きな差があるため平均せずCONFLICT保持。

### 系統A — 後年整理/P-WORLD由来系

| 設定 | 機械割 |
|---|---:|
| 1 | 95.3% |
| 2 | 98.2% |
| 3 | 101.7% |
| 4 | 104.5% |
| 5 | 107.4% |
| 6 | 113.5% |

### 系統B — 解析シミュレーション系

| 設定 | 機械割 |
|---|---:|
| 1 | 96.2% |
| 2 | 98.7% |
| 3 | 101.5% |
| 4 | 103.8% |
| 5 | 106.2% |
| 6 | 111.2% |

信頼度: CONFLICT

## initialHitBySetting

K-Navi、HAZUSE、複数解析資料でほぼ一致。

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/372.36 | 1/809.09 | 1/255.00 |
| 2 | 1/352.34 | 1/762.05 | 1/240.94 |
| 3 | 1/330.99 | 1/712.35 | 1/225.99 |
| 4 | 1/318.14 | 1/661.98 | 1/214.87 |
| 5 | 1/309.13 | 1/624.15 | 1/206.74 |
| 6 | 1/284.94 | 1/585.14 | 1/191.63 |

- K-Navi/HAZUSEは整数丸めでBIG `1/372→1/284`、REG `1/809→1/585`。
- 色別BIGは赤7・青7が約401枚、黄7が約251枚の別フラグ構成。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

解析シミュレーション資料:

| 設定 | 50枚あたりゲーム数 |
|---|---:|
| 1 | 41.36G |
| 2 | 42.16G |
| 3 | 42.99G |
| 4 | 43.88G |
| 5 | 45.40G |
| 6 | 48.42G |

- 通常時ベル・スイカ・チェリーに設定差があるためベースも設定差あり。
- 今回、同じ設定別50枚表を別系統で完全照合できなかったためANALYSIS_SINGLEとして保持。

信頼度: ANALYSIS_SINGLE

## netIncrease

- REG終了後は最大50GのRT `レイチャンス`。
- 特殊リプレイ成立で次回ボーナスまで継続するRT `暴走モード` へ移行。
- P-WORLDはRTを1Gあたり約 `+0.9枚`、K-Naviは暴走モードを約 `+1枚/G` と記載。
- 解析資料の一部には暴走モードを「コイン増加は見込めない」とする記述もあり、定義/算出条件差の可能性があるため、物差し値は `約+0.9〜+1.0枚/G` を主要公開値として保持しつつCONFLICT注記する。

信頼度: CONFLICT（純増表現） / ANALYSIS_HIGH（RT構造）

## basicPayout

- 赤7 BIG: 466枚超払い出し終了、純増最大約401〜416枚級。
- 青7 BIG: 466枚超払い出し終了、純増最大約401〜416枚級。
- 黄7 BIG: 286枚超払い出し終了、純増約251〜260枚級。
- REG: 12G消化または4回入賞で終了、純増約50〜52枚 + RT50G。
- P-WORLD/K-Navi/複数解析で基本構成は一致。純増表現には攻略手順・最大値による丸め差があるため幅として保持。

信頼度: ANALYSIS_HIGH

## modeSpecificMinimumData

### レイチャンス

- REG終了後に突入。
- 最大50G継続、ボーナス成立で終了。
- 特殊リプレイ確率は解析値 `1/655.36`。
- 特殊リプレイ成立で暴走モードへ移行し、K-Naviはレイチャンス中の暴走突入率を約7%としている。

### 暴走モード

- 特殊リプレイ成立から突入。
- 次回ボーナス成立まで継続。
- 通常時にも特殊リプレイから突入可能。

### 天井に関する資料差

- 後年回顧資料にはBIG後1000G/REG後800Gから特殊リプレイ高確率を経て天井RT発動とする記述がある。
- 一方、K-Naviのユーザー記録には「天井はない」とする記述もあり、当時公式/解析本文で今回確定できないため、天井仕様はCONFLICT/UNVERIFIEDとしてリセット挙動へ安易に転用しない。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `設定変更 / リセット / 朝一 / レイチャンス / 暴走モード / 天井 / BGM` を組み替え、K-Navi、P-WORLD、HAZUSE、旧解析、回顧資料を再探索。
- 設定変更時にRT状態・特殊リプレイ高確率状態・ゲーム数をどう処理するかの確定資料は今回UNVERIFIED。

carryOverBehavior:
- 据え置き時のRT状態、天井候補ゲーム数、特殊リプレイ高確率状態の引継ぎはUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみの場合のRT状態/内部カウンタ処理はUNVERIFIED。

gameCounterReset:
- BIG後1000G/REG後800G天井RT説自体に資料差があるため、設定変更時のゲーム数リセット/引継ぎもUNVERIFIED。

ceilingAfterReset:
- 設定変更による短縮天井・専用天井の公開確定値は今回UNVERIFIED。

modeAfterReset:
- 朝一専用モード/設定変更専用モードは確認できずNONE_CONFIRMED。

stateAfterReset:
- レイチャンス/暴走モード等のRT状態を設定変更で初期化するか、内部状態を再抽選するかはUNVERIFIED。

advantageousSectionReset:
- NOT_APPLICABLE（5号機初期・有利区間制度導入前）。

resetBenefits:
- 設定変更固有の朝一RT突入・天井短縮等の確定恩恵は今回NONE_CONFIRMED。

resetPenalties:
- 設定変更固有の不利要素は今回NONE_CONFIRMED。

resetDetection:
- K-Naviの本機攻略メニューに `BGM変化で設定変更判別` という本機固有の変更判別項目が存在することを確認。
- ただし当該詳細ページは現行取得環境で403となり、具体条件・判定方向・発生率を本文確認できなかったため、`BGMによる変更判別手段の存在` のみ確認済み、条件はUNVERIFIEDとして保持。
- ガックンについて本機固有の高信頼確定資料は今回UNVERIFIED。

numericResetData:
- 設定変更時モード振り分け、朝一当選率、短縮G数、変更時RT突入率など比較可能な公開数値は今回UNVERIFIED。

## sources

取得日: 2026-08-31

1. ALL7.jp — 2007年7月新台導入予定一覧
   - https://www.all7.jp/plans/index/2007/07/20
   - 新世紀エヴァンゲリオン まごころを、君に / ビスティ / 導入予定2007-07-09
   - reliability: INDUSTRY
2. グリーンべると — フィールズ、スロ『エヴァ』効果で上方修正
   - https://web-greenbelt.jp/00004271/
   - 2007年7月市場投入を確認
   - reliability: INDUSTRY
3. P-WORLD — 新世紀エヴァンゲリオン～まごころを、君に～
   - https://www.p-world.co.jp/machine/database/4743
   - 5号機/ノーマル+RT、BIG約400/250枚、REG約50枚+RT、RT約+0.9枚/G
   - reliability: ANALYSIS_HIGH
4. K-Navi — 新世紀エヴァンゲリオン～まごころを、君に～
   - https://p-kn.com/slot/591/
   - 設定別BIG/REG、払い出し終了条件、REG後RT50G、BGM変化による設定変更判別メニュー
   - reliability: ANALYSIS_HIGH
5. K-Navi — 暴走モード
   - https://p-kn.com/slot/591/3515/
   - 特殊リプレイから次回ボーナスまでRT、約+1枚/G、レイチャンス中突入率約7%
   - reliability: ANALYSIS_HIGH
6. HAZUSE — 新世紀エヴァンゲリオン～まごころを、君に～
   - https://hazuse.com/machine/pachislot/7S0173/
   - 型式名/検定番号、設定別BIG/REG/合成
   - reliability: ANALYSIS_HIGH
7. けんのスロットシミュレーション — 解析情報
   - https://kenslo65536.com/kaiseki/eva-magokoro.html
   - 設定別50枚ベース、設定別ボーナス、機械割系統B
   - reliability: ANALYSIS_SINGLE
8. パチナビ — 初代まごころ設定判別
   - https://pachinavi.net/machines/eva-magokoro-1/settei/
   - 機械割系統A
   - reliability: RETROSPECTIVE_SUPPORT
9. エヴァ解析サイト — 小役/RT解析
   - https://ccw.moryou.com/evaeva/koyaku1.html
   - レイチャンス/暴走モードのリプレイ・特殊リプレイ確率
   - reliability: ANALYSIS_SINGLE
10. P-TRO回顧 — エヴァ歴代機種まとめ
   - https://ptro.live/p-evangelion.html
   - BIG後1000G/REG後800G天井RT記述、機械割系統A
   - reliability: RETROSPECTIVE_SINGLE

## missingFields

- 設定変更時のRT/内部状態処理
- 据え置き時のRT/天井候補ゲーム数引継ぎ
- 電源OFF→ONのみの内部状態処理
- 天井RT仕様の一次/当時解析による確定
- BGM変更判別の具体条件・判定方向
- 本機固有ガックン
- 設定変更時の公開朝一数値

## conflicts

1. 機械割: 系統A `95.3/98.2/101.7/104.5/107.4/113.5%` と系統B `96.2/98.7/101.5/103.8/106.2/111.2%`。平均せず双方保持。
2. RT純増表現: P-WORLD約+0.9枚/G、K-Navi暴走モード約+1枚/G、別解析に「コイン増加は見込めない」表現あり。RT種別/算出条件差の可能性があるためCONFLICT注記。
3. 天井: 後年回顧にBIG後1000G/REG後800G天井RT記述がある一方、別後年記録に天井なしの記述があり、当時一次/解析本文で今回確定できずCONFLICT/UNVERIFIED。
