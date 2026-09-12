# パチスロ犬夜叉

machineName: パチスロ犬夜叉
formalModelName: S犬夜叉CAN
manufacturer: クロスアルファ
inspectionCode: 2S0110
releaseDate: 2022-07-04
generation: 6.5号機
systemType: AT / 疑似ボーナス / CZ
recordNo: 1505
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## payoutRateBySetting

- 設定1: 97.8%
- 設定2: 99.0%
- 設定3: 100.9%
- 設定4: 105.0%
- 設定5: 108.1%
- 設定6: 112.2%

信頼度: HIGH（HAZUSE / K-Navi / 複数解析で一致）

## initialHitBySetting

### 四魂ボーナス初当り
- 設定1: 1/278
- 設定2: 1/276
- 設定3: 1/271
- 設定4: 1/261
- 設定5: 1/252
- 設定6: 1/247

### AT「ブッた斬りSRUSH」初当り
- 設定1: 1/457
- 設定2: 1/439
- 設定3: 1/413
- 設定4: 1/365
- 設定5: 1/334
- 設定6: 1/313

信頼度: HIGH（HAZUSE / K-Navi / 当時解析で一致）

## baseGamesPer50

- 約33.6G / 50枚（全設定共通の主要解析値）

信頼度: HIGH

## netIncrease

- AT「ブッた斬りSRUSH」: 約1.8枚/G
- AT中疑似ボーナス: 約5.0枚/G

信頼度: HIGH（業界記事 / HAZUSE / 複数解析で一致）

## basicPayout

- 四魂ボーナス: 約50枚
- AT初期ゲーム数: 20G / 30G / 40G + α
- AT中ボーナス:
  - ブーストチャンス: 初期50枚
  - BIG BONUS（白）: 初期100枚
  - BIG BONUS（青）: 初期200枚
- AT中ボーナス当選率: 約1/12.8
- ボーナス当選を重ねるほど次回ボーナスストック数が増える「AT+A+1」型。最大8個ストック。

## modeSpecificMinimumData

- 6.5号機。差枚数2,400枚+α、有利区間上限4,000Gの新基準を活用したAT機。
- 通常時は四魂ボーナスを経由してATを目指し、非AT当選時はCZ「鉄砕牙チャンス」へ移行。
- 特殊高確「月下」からAT直撃ルートあり。
- 通常ゲーム数天井: 最大666Gで四魂ボーナス。
- 四魂ボーナス回数天井: 最大8回目でAT。
- 有利区間移行後約3000GでAT直撃とする実戦解析があるが、メーカー一次公表値ではないため `ANALYSIS_REPORTED` として分離保持。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_MINOR_UNVERIFIED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior

- 有利区間: RESET。
- 天井: RESET。
- 内部モード: RESET。
- 内部状態: RESET後に再抽選。
- 四魂ボーナスのAT当選までの規定回数を再抽選し、**50%以上で3回以内**が選択される。
- 月の表示は殺生丸画面へ変化。
- 朝一開始ステージの固定契約は複数資料で直接確定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 据え置き時は有利区間・天井・内部状態を引き継ぐとNanaPressが掲載。
- 内部モードも電源OFF→ON比較表では引継ぎ。設定変更なしの据え置き運用ではCARRY_OVERとして扱う。
- リール横液晶 / 月表示は朝一に殺生丸表示へ変化するため、表示だけで据え置き判別はできない。

### powerCycleBehavior

- 設定変更を伴わない純電源OFF→ONでは、有利区間・天井・内部モード・内部状態を **CARRY_OVER**。
- 月の表示は殺生丸画面へ変化する。
- したがって「殺生丸表示=設定変更」とは判定不可。

### gameCounterReset

- 設定変更: 通常ゲーム数天井をRESET。
- 据え置き: 天井ゲーム数CARRY_OVER。
- 純電源OFF→ON: 天井ゲーム数CARRY_OVER。
- 通常時最大666Gで四魂ボーナス。
- 四魂ボーナスの規定回数は通常最大8回目でAT。設定変更時は規定回数再抽選が優遇される。

### ceilingAfterReset

- 通常ゲーム数天井そのものを666Gから固定短縮する公開契約は確認できず、**固定G数短縮なし / NONE_CONFIRMED**。
- 一方、AT当選までの四魂ボーナス規定回数は設定変更時に優遇され、**50%以上で3回以内**。
- 「スルー天井短縮」はゲーム数天井短縮と混同せず別項目として保持する。

### modeAfterReset

- 設定変更で内部モードRESET。
- 据え置き / 純電源OFF→ONでは内部モードCARRY_OVER。
- 設定変更専用の全モード振り分けは物差しに必要な粒度で公開固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset

設定変更時の内部状態振り分け:

| 設定 | 通常 | 高確 | 超高確 |
|---:|---:|---:|---:|
| 1 | 93.4% | 6.3% | 0.4% |
| 2 | 93.4% | 6.3% | 0.4% |
| 3 | 93.4% | 6.3% | 0.4% |
| 4 | 85.9% | 12.5% | 1.6% |
| 5 | 85.9% | 12.5% | 1.6% |
| 6 | 82.8% | 15.6% | 1.6% |

- 高設定ほど高確以上から始まりやすい。
- 据え置き / 純電源OFF→ON時は内部状態CARRY_OVER。

### advantageousSectionReset

- 設定変更: 有利区間RESET。
- 据え置き / 純電源OFF→ON: 有利区間CARRY_OVER。
- 通常時は有利区間ランプが点灯しない運用のため、朝一ランプだけでの設定変更判別は困難。

### resetBenefits

- 四魂ボーナス規定回数が優遇され、設定変更時は**50%以上で3回以内**にAT当選規定回数が選択。
- 初期内部状態も再抽選され、高設定ほど高確以上スタート率が高い。
- 設定変更専用の固定ゲーム数天井短縮は確認されない。

### resetPenalties

- 設定変更固有の主要な公開不利要素: NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection

- 有利区間ランプ: 通常時に点灯しないため、ランプ単独での変更判別は困難。
- 月 / リール横液晶: 設定変更時も据え置き・純電断後も殺生丸表示へ変化するため、単独判別不可。
- 1回目の鉄砕牙チャンス終了時アイキャッチが犬夜叉なら、設定変更の可能性アップとHAZUSEが整理。
- 初回の殺生丸pt獲得時に半月以上へ昇格した場合は、据え置きの可能性アップとHAZUSEが整理。
- **本2022年機固有のリールガックン契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。** 旧5号機「犬夜叉」のガックン情報は別機種のため混入させない。

### numericResetData

- 設定変更後AT規定回数: **50%以上で四魂ボーナス3回以内**。
- 設定変更時内部状態:
  - 設定1〜3: 通常93.4% / 高確6.3% / 超高確0.4%
  - 設定4〜5: 通常85.9% / 高確12.5% / 超高確1.6%
  - 設定6: 通常82.8% / 高確15.6% / 超高確1.6%
- 固定ゲーム数天井短縮値: NONE_CONFIRMED。
- 朝一特定G以内の直接当選率: NONE_CONFIRMED_AFTER_RESEARCH。

### publicMorningNumbers

- **設定変更時、50%以上で四魂ボーナス規定回数3回以内。**
- **設定変更時の内部状態振り分けは設定別に公開**（上表）。
- 朝一○G以内AT当選率の固定公表値は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior QAメモ

- パチマガスロマガの設定変更/電源OFF→ON比較表で、有利区間・天井・内部モード・内部状態のRESET/CARRY_OVERを直接確認。
- NanaPressでも設定変更時RESET / 据え置きCARRY_OVERを照合。
- HAZUSEで型式・検定番号、通常天井666G、規定四魂ボーナス回数天井、50%以上で3回以内、変更判別要素を確認。
- 設定変更時の内部状態振り分けはNanaPress / HAZUSE系解析 / 後年整理資料で一致。
- 検索時に2016年前後の旧5号機「犬夜叉」や2024年の「犬夜叉2」が混入するため、`S犬夜叉CAN / 2S0110 / 2022 / クロスアルファ` を識別キーとして分離した。

## conflicts

- manufacturer表記:
  - 遊技日本 / HAZUSE / 型式資料: クロスアルファ
  - 一部業界記事: スパイキー製との表現あり
  - 本DBでは型式・主要DBに合わせ `クロスアルファ` をcanonical manufacturerとし、Spikyは権利/開発系表記として混同しない。
- 有利区間天井約3000Gは実戦解析値で、公式固定値ではない。通常ゲーム数天井666Gとは定義を分離する。

## missingFields

- 設定変更後の開始ステージ固定契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の内部モード全振り分け: UNVERIFIED_AFTER_RESEARCH
- 2022年機固有のリールガックン条件 / 発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内AT当選率: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-13

1. 遊技日本 — 7/4パチスロ新台導入「パチスロ犬夜叉」
   - https://yugi-nippon.com/pachinko-new-machine/post-52472/
   - 2022-07-04導入、クロスアルファ、型式S犬夜叉CAN、四魂ボーナス約50枚、ゲームフロー
   - reliability: INDUSTRY
2. P-WORLD業界ニュース / 遊技日本 — 新台発表
   - https://news.p-world.co.jp/articles/20751/nippon
   - 型式S犬夜叉CAN、6.5号機、四魂ボーナス約50枚、AT約1.8枚/G、ボーナス約5.0枚/G
   - reliability: INDUSTRY
3. P-WORLD業界ニュース / 遊技通信
   - https://news.p-world.co.jp/articles/20734/yugitsushin
   - 6.5号機、AT初期20/30/40G+α、50/100/200枚ボーナス
   - reliability: INDUSTRY
4. HAZUSE — パチスロ犬夜叉 基本スペック
   - https://hazuse.com/machine/pachislot/2S0110/genre/201/
   - 型式S犬夜叉CAN、検定番号2S0110、2022-07-04、設定別機械割/初当り、33.6G/50枚、純増
   - reliability: ANALYSIS_HIGH / MODEL_DB
5. HAZUSE — 天井・設定変更
   - https://hazuse.com/machine/pachislot/2S0110/genre/207/
   - 666G天井、四魂ボーナス最大8回、設定変更/電源ON OFF比較、50%以上で3回以内、有利区間ランプ、変更判別
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 朝イチ・有利区間ランプ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/crossalpha_slot/01/kr01-1.php
   - 設定変更: 有利区間/天井/内部モード/内部状態RESET、電源OFF ON: CARRY_OVER、月表示
   - reliability: ANALYSIS_HIGH
7. NanaPress — 朝一/有利区間
   - https://nana-press.com/kaiseki/machine/382/10512/
   - 設定変更RESET / 据え置きCARRY_OVER、50%以上で3回以内、朝一恩恵
   - reliability: ANALYSIS_HIGH
8. NanaPress — 設定判別 / 設定変更時内部状態
   - https://nana-press.com/kaiseki/machine/382/10192/
   - 設定1〜6の設定変更時通常/高確/超高確振り分け
   - reliability: ANALYSIS_HIGH
9. パチマガスロマガ — 四魂ボーナス
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/crossalpha_slot/01/bn01.php
   - 四魂ボーナス約50枚、規定回数最大8回、設定変更時50%以上で3回以内
   - reliability: ANALYSIS_HIGH
10. ぱちんこキュレーション / K-Navi — 基本スペック
   - https://p-kn.com/slot/3805/
   - 設定別ボーナス/AT/機械割、2022-07-04
   - reliability: ANALYSIS_HIGH
11. ちょんぼりすた — S犬夜叉解析
   - https://chonborista.com/slot/spiky/167769/
   - 33.6G/50枚、AT/疑似ボーナス純増、天井、設定別スペック
   - reliability: ANALYSIS_SECONDARY
12. パチンコ・パチスロ解析攻略まとめ — 2022年犬夜叉
   - https://www.pachinow.jp/s1/inuyasha-index.php
   - 666G天井、四魂ボーナス最大8回、有利区間約3000Gの実戦解析、設定別初当り
   - reliability: ANALYSIS_SECONDARY
