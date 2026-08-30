# コミックワールド沖

machineName: コミックワールド沖
manufacturer: バルテック
releaseDate: 2006-12-03
generation: 5号機初期
systemType: ボーナス主体 + ナビ支援（A+AT的構造）

## payoutRateBySetting

| 設定 | PAYOUT |
|---:|---:|
| 1 | 95.60% |
| 2 | 97.80% |
| 3 | 101.40% |
| 4 | 104.50% |
| 5 | 106.70% |
| 6 | 109.60% |

グリーンべると発表値とpacnk、5号機クロニクルが一致。

reliability: ANALYSIS_HIGH

## initialHitBySetting

BIG合算:
- 設定1: 1/324.43
- 設定2: 1/309.13
- 設定3: 1/295.20
- 設定4: 1/282.48
- 設定5: 1/270.81
- 設定6: 1/260.06

グリーンべるとでは合成約1/324（設定1）〜1/260（設定6）。

reliability: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」を含め再探索したが、比較可能な確定値を今回取得できず。

## netIncrease

通常時のチェリーナビ率を高める「シフトアップナビゲーション」を搭載。
ナビ状態によるベースアップ効果は確認できるが、1Gあたり純増等の比較可能な数値は今回未取得。

## basicPayout

グリーンべると掲載の6種類のボーナス純増:
- Easy: 351枚 / 208枚
- AT: 364枚 / 234枚
- Challenge: 380枚 / 268枚

reliability: INDUSTRY

## modeSpecificMinimumData

- 赤・青・黄3色チェリーのナビ率を高めるシフトアップナビゲーション。
- 各色ランプ点灯数に応じてチェリーナビ率が上昇し、全色点灯時は全チェリーのナビ率がほぼ100%。
- BIG中ミニゲームの結果で終了後ステージが変化。
- 勝利時の「南国モード」は全チェリーのナビ率が上がり、ボーナス完全告知となる。

## resetBehavior

settingChangeBehavior: UNVERIFIED
carryOverBehavior: UNVERIFIED
powerCycleBehavior: UNVERIFIED
gameCounterReset: 天井/ゲーム数管理型であることを示す高信頼資料を今回確認できず。UNVERIFIED
ceilingAfterReset: 該当する公開天井情報を確認できず。UNVERIFIED
modeAfterReset: 南国モード等の設定変更時再抽選/引継ぎはUNVERIFIED
stateAfterReset: UNVERIFIED
advantageousSectionReset: NOT_APPLICABLE（5号機初期）
resetBenefits: 設定変更時固有の恩恵は今回確認できず。UNVERIFIED
resetPenalties: UNVERIFIED
resetDetection: ガックン等を「設定変更判別」として裏付ける高信頼資料は今回未取得
numericResetData: UNVERIFIED

再探索語: 「コミックワールド沖 設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「モード」「ガックン」。検索上位・当時解析資料に明示値が確認できなかったため推測しない。

## sources

取得日: 2026-08-31

1. グリーンべると — パチスロ漫画界の巨匠とのタイアップ実現
   - https://web-greenbelt.jp/00004945/
   - 2006-12-03納品、ゲーム性、6種ボーナス純増、合成確率、出玉率
   - reliability: INDUSTRY
2. pacnk — コミックワールド沖 設定判別ツール
   - https://pacnk.com/slot/tools/sh_komikkuwarudooki.html
   - 設定別BIG合算・PAYOUT
   - reliability: ANALYSIS_SINGLE
3. 5号機クロニクル — バルテック5号機全機種一覧
   - https://5goki.com/baltec
   - 2006/12導入、設定別機械割照合
   - reliability: ANALYSIS_SINGLE
4. パチマガスロマガ — コミックワールド沖
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/baltech_slot/47/baltech_slot_47.php
   - 当時解析ページの存在を確認
   - reliability: ANALYSIS_HIGH

## missingFields

- 50枚あたりゲーム数
- ナビ状態の定量的な純増/ベース差
- resetBehaviorの公開数値・変更判別情報

## conflicts

主要取得値に確定的な競合なし。
