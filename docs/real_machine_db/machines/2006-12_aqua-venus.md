# アクアビーナス

machineName: アクアビーナス
manufacturer: 平和
releaseDate: 2006-12
generation: 5号機初期
systemType: ノーマル / 完全告知

## payoutRateBySetting

| 設定 | 出玉率 |
|---:|---:|
| 1 | 99.2% |
| 2 | 100.9% |
| 3 | 102.7% |
| 4 | 104.8% |
| 5 | 106.9% |
| 6 | 111.1% |

P-WORLDと5号機クロニクルで一致。

reliability: ANALYSIS_HIGH

## initialHitBySetting

P-WORLD掲載:

| 設定 | BIG | REG |
|---:|---:|---:|
| 1 | 1/300.5 | 1/600.4 |
| 2 | 1/292.0 | 1/573.3 |
| 3 | 1/285.9 | 1/550.0 |
| 4 | 1/275.0 | 1/528.6 |
| 5 | 1/269.0 | 1/472.9 |
| 6 | 1/257.9 | 1/367.2 |

reliability: ANALYSIS_HIGH

## baseGamesPer50

UNVERIFIED

「50枚」「1000円」「ベース」「コイン持ち」を含め再探索したが、比較可能な確定値を今回取得できず。

## netIncrease

RT等の付加出玉機能は持たない純Aタイプとして扱う。

## basicPayout

P-WORLD掲載:
- BIG: 約312枚
- REG: 約143枚

5号機クロニクルは約360枚/約104枚と異なる定義・資料値を掲載しているため、純増定義が明確なP-WORLD値を主データとし、競合候補を下記に保持。

reliability: ANALYSIS_HIGH / CONFLICT

## modeSpecificMinimumData

- 完全告知タイプ。
- 単独ボーナスは成立ゲーム告知。
- リプレイ重複では次ゲーム以降のリプレイ非成立ゲームで告知される構造。
- ボーナス成立後にリプレイ確率が上がり、リプレイ連続がボーナス期待感につながるゲーム性。

## resetBehavior

settingChangeBehavior: UNVERIFIED
carryOverBehavior: UNVERIFIED
powerCycleBehavior: UNVERIFIED
gameCounterReset: 天井/ゲーム数管理型であることを示す高信頼資料を確認できず。UNVERIFIED
ceilingAfterReset: 公開天井情報を確認できず。UNVERIFIED
modeAfterReset: 内部モード型の朝一再抽選を示す資料を確認できず。UNVERIFIED
stateAfterReset: UNVERIFIED
advantageousSectionReset: NOT_APPLICABLE（5号機初期）
resetBenefits: 設定変更時固有の朝一恩恵は今回確認できず。UNVERIFIED
resetPenalties: UNVERIFIED
resetDetection: ガックン等の変更判別を裏付ける高信頼資料は今回未取得
numericResetData: UNVERIFIED

再探索語: 「アクアビーナス 設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「天井」「ガックン」。当時解析・後年回顧・機種DBを横断したが、設定変更時固有の挙動を確定できる資料を今回取得できなかったため推測しない。

## sources

取得日: 2026-08-31

1. P-WORLD — アクアビーナス
   - https://www.p-world.co.jp/machine/database/4492
   - 設定別BIG/REG、出玉率、型式名アクアビーナスK、獲得枚数約312/143枚
   - reliability: ANALYSIS_HIGH
2. 5号機クロニクル — 平和＆オリンピア5号機全機種一覧
   - https://5goki.com/heiwa-olympia
   - 2006/12導入、設定別機械割照合、純Aタイプ
   - reliability: ANALYSIS_SINGLE
3. グリーンべると — 平和、19万円代のパチスロ含め3機種発表
   - https://web-greenbelt.jp/00004935/
   - 2006年11月発表のアクアビーナスKを確認
   - reliability: INDUSTRY
4. 後年機種解説 — アクアビーナス機種情報
   - https://ameblo.jp/w-wolfvct/entry-10026440018.html
   - 完全告知・リプレイ重複時の告知挙動の補助確認
   - reliability: ANALYSIS_SINGLE

## missingFields

- 50枚あたりゲーム数
- resetBehaviorの公開数値・変更判別情報

## conflicts

basicPayout:
- P-WORLD: BIG約312枚 / REG約143枚
- 5号機クロニクル: BIG約360枚 / REG約104枚

純増・払い出し・最大獲得など定義差の可能性があるため平均せずCONFLICTとして保持。
