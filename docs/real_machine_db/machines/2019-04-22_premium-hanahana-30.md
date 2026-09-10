# プレミアムハナハナ-30

recordNo: 1280
machineName: プレミアムハナハナ-30
manufacturer: パイオニア
formalModel: プレミアムハナハナ/DX-30
certificationNumber: 8S0028
releaseDate: 2019-04-22
generation: 5.9号機
systemType: ノーマルA / 完全告知 / 30Φ

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.0% |
| 2 | 98.0% |
| 3 | 101.0% |
| 4 | 104.0% |
| 5 | 107.0% |
| 6 | 112.0% |

信頼度: HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | BIG | REG | 合算 |
|---|---:|---:|---:|
| 1 | 1/299 | 1/496 | 1/186 |
| 2 | 1/290 | 1/468 | 1/179 |
| 3 | 1/278 | 1/436 | 1/170 |
| 4 | 1/265 | 1/402 | 1/159 |
| 5 | 1/252 | 1/370 | 1/150 |
| 6 | 1/234 | 1/334 | 1/138 |

信頼度: HIGH_MULTI_SOURCE

## baseGamesPer50

- 36.8G/50枚

信頼度: HIGH_MULTI_SOURCE

## netIncrease

- AT/ART非搭載のノーマルタイプのため非該当。

## basicPayout

- BIG CHANCE: 最大312枚
- REG CHANCE: 最大130枚

信頼度: INDUSTRY_HIGH

## modeSpecificMinimumData

- 5号機最後のハナハナシリーズ。
- ハイビスカス点滅でボーナス告知するノーマルタイプ。
- 通常ゲーム数天井は非搭載。
- 有利区間を用いたAT/ART仕様ではない。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_RESEARCH_EXHAUSTED

- settingChangeBehavior: 設定変更後「最初のBIG」でTOPパネル（スポットライトパネル）が色変化する傾向を一撃の実戦調査で確認。設定変更時の内部状態については本機固有の公開契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehavior: 据え置き時の内部状態・告知状態について、本機固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。
- powerCycleBehavior: 電源OFF→ONのみの内部状態・告知状態について、本機固有の直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。据え置き一般論から補完しない。
- gameCounterReset: 天井非搭載のため `NOT_APPLICABLE_NO_CEILING_COUNTER`。
- ceilingAfterReset: 天井非搭載のため `NOT_APPLICABLE_NO_CEILING`。
- modeAfterReset: 朝一専用モード/モード振り分けを確認できず `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。
- stateAfterReset: 設定変更/据え置き/純電断ごとの内部状態契約は `UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: ノーマルタイプで有利区間を用いるゲーム性ではないため `NOT_USED`。
- resetBenefits: 設定変更後初回BIGでTOPパネル色変化傾向あり。天井短縮や初当り優遇等の確定恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetPenalties: 設定変更専用の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetDetection: ハナハナシリーズはガックン判別が効くとする実戦系資料あり。ただし本機では非常に分かりづらいとの注意あり。加えて初回BIG後TOPパネル色変化傾向は設定変更判別に使える可能性あり。いずれも発生率の確定解析値なし。
- numericResetData: 設定変更後TOPパネル色変化の発生率、ガックン率、朝一当選率等の公開確定数値は `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。

### resetBehavior 再探索メモ

「プレミアムハナハナ-30 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / TOPパネル / スポットライト / 天井」を組み合わせ、当時解析・業界記事・メーカー情報・後年まとめを横断。設定変更後初回BIGのTOPパネル色変化傾向とガックン判別情報は得られたが、設定変更・据え置き・純電断それぞれの内部状態契約は固定できなかったため推測補完していない。

## qualityNotes / conflicts

- 一部解析ページに導入日を「2018年4月22日」とする記載があるが、パイオニア公式2019年製品一覧、P-WORLD、複数解析、2019年2月の当時業界記事と整合せず明白な年誤記と判断。canonicalは `2019-04-22`。`TYPO_LOW_QUALITY_DATE_2018_VS_2019_MULTI_SOURCE` として注記。
- 内覧会記事の「BIG払い出し345枚 / REG払い出し135枚」は払い出し枚数表現で、純増最大はBIG312枚 / REG130枚。定義差として分離しCONFLICT扱いしない。

## sources

取得日: 2026-09-11

1. パイオニア公式 2019年製品一覧
   - https://www.slot-pioneer.co.jp/products/2019.html
   - 2019年4月発売、5号機最後のハナハナ
   - reliability: OFFICIAL
2. P-WORLD 機種DB
   - https://www.p-world.co.jp/machine/database/8896
   - 型式、検定番号、導入日、BIG/REG、最大獲得枚数
   - reliability: MACHINE_DATABASE_HIGH
3. グリーンべると / P-WORLD業界ニュース
   - https://news.p-world.co.jp/articles/10793/greenbelt
   - 2019-02-27発表、BB/RB/合算/出玉率/36.8G、312/130枚、納品予定
   - reliability: INDUSTRY
4. パチマガスロマガ
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/128/h.php
   - 設定別BIG/REG/合算/PAYOUT
   - reliability: ANALYSIS_HIGH
5. 一撃
   - https://1geki.jp/slot/s_phanahana/3/
   - 天井非搭載、設定変更後初回BIGのTOPパネル色変化傾向
   - reliability: CONTEMPORARY_ANALYSIS
6. 一撃 50枚ベース
   - https://1geki.jp/slot/s_phanahana/4/
   - 36.8G/50枚
   - reliability: CONTEMPORARY_ANALYSIS
7. モゲスロ
   - https://moge-site.com/archives/21845
   - 5.9号機/Aタイプ、2019-04-22、設定別スペック、ガックン判別所見
   - reliability: CONTEMPORARY_ANALYSIS

coreStatus: COMPLETE_CORE
