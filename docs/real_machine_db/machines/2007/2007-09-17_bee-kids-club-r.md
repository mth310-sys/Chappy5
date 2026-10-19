# ビーキッズクラブR

status: COMPLETE_CORE
qaResetBehavior: PARTIAL

machineName: ビーキッズクラブR
manufacturer: オリンピア
releaseDate: 2007-09-17
generation: 5号機
systemType: ノーマル / 完全告知 / ボーナス主体

## releaseDate evidence

- グリーンべるとの2007-08-24発表記事は、2007-08-23にオリンピア東京営業所ショールームで発表内覧会を開催し、**納品は2007-09-17から予定**と明記。
- P-WORLDは導入開始を2007年9月と記録。
- 5号機クロニクル、後年実機販売資料も2007年9月導入で一致。
- 月単位資料と当時業界一次記事の具体日が整合するため、本DB releaseDate は `2007-09-17` とする。

信頼度: INDUSTRY

## payoutRateBySetting

当時業界一次記事の設定1/6レンジと、後年実機DB・攻略保存資料の全設定値が整合。

| 設定 | 機械割 |
|---|---:|
| 1 | 95.7% |
| 2 | 97.9% |
| 3 | 100.1% |
| 4 | 103.8% |
| 5 | 106.4% |
| 6 | 110.0% |

信頼度: ANALYSIS_HIGH / INDUSTRY_CORROBORATED

## initialHitBySetting

当時業界一次記事はBB `1/299（設定1）〜1/252（設定6）`、RB `1/426〜1/256`、合成 `1/176〜1/127` を公表。A-SLOTと旧攻略保存資料は全設定で同値を掲載している。

| 設定 | BIG | REG | ボーナス合算 |
|---|---:|---:|---:|
| 1 | 1/299 | 1/426 | 1/176 |
| 2 | 1/293 | 1/377 | 1/165 |
| 3 | 1/286 | 1/338 | 1/155 |
| 4 | 1/279 | 1/308 | 1/146 |
| 5 | 1/269 | 1/284 | 1/138 |
| 6 | 1/252 | 1/256 | 1/127 |

※公開資料の丸め値をそのまま保持し、分母から精密値を逆算しない。

信頼度: ANALYSIS_HIGH / INDUSTRY_CORROBORATED

## baseGamesPer50

- グリーンべると当時記事: **1000円あたり約35G**。
- 50枚貸し前提の比較値として `約35G/50枚` を採用。

信頼度: INDUSTRY

## netIncrease

- 通常時の出玉増加用RT/ART/ATは `NOT_APPLICABLE`。
- 当時業界記事では、プラム+ボーナス重複成立後に告知までリプレイ確率が上がる挙動を説明しているが、これは出玉増加区間として運用するRTではなく、通常時性能の `netIncrease` 対象外。
- 旧攻略保存資料も「RTなどの付加機能:なし」と整理。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout

- BIG: 純増 **312枚**（当時業界一次記事）。
- REG: **104枚**（当時業界一次記事）。
- A-SLOT後年実機資料はBIG約310枚 / REG約104枚として整合。
- 5号機クロニクルの「BIG最大375枚」は払い出し/最大値側の別定義とみなし、実獲得比較値には当時記事の純増312枚を使用する。

信頼度: INDUSTRY

## modeSpecificMinimumData

- 完全告知のボーナス主体ノーマルタイプ。
- ボーナス重複対象役はチェリー、1枚役、プラム。
- 当時記事ではプラム+ボーナス重複時、成立ゲームでは告知せず、次ゲーム以降の小役非成立時に告知。成立後はベル/プラム出現率の変化とリプレイ確率上昇がある。
- 通常時ゲーム数天井なし。
- 出玉増加用RT/ART/ATなし。
- 有利区間制度導入前。

## resetBehavior

resetBehaviorQA: PARTIAL

settingChangeBehavior:
- `ビーキッズクラブR / ビーキッズクラブ / オリンピア / 設定変更 / リセット / 朝一 / 据え置き / 電源 / ガックン / 天井 / RT` を組み替え、当時業界記事、P-WORLD、旧攻略保存資料、5号機DB、実機販売資料、回顧資料まで横断。
- 通常時天井・通常時モード・CZ/ART等を持たないため、リセットによる天井短縮や朝一モード恩恵は `NOT_APPLICABLE / NONE_CONFIRMED`。
- 本機固有の設定変更時リール初期挙動、成立済みボーナス等の特殊状態処理は高信頼資料で確定できず `UNVERIFIED`。

carryOverBehavior:
- 引継ぎ対象となる通常時天井ゲーム数・通常時モード・CZ/ART状態は `NOT_APPLICABLE`。
- 成立済みボーナス等の特殊状態を据え置き時にどう扱うかは、本DB用途上の公開資料で確定できず `UNVERIFIED`。

powerCycleBehavior:
- 電源OFF→ONのみで短縮天井・朝一専用モード・初当たり優遇が発生する根拠は `NONE_CONFIRMED`。
- 本機固有の電源再投入時リール挙動、成立済みボーナス状態等の処理は `UNVERIFIED`。

gameCounterReset:
- 通常時ゲーム数天井なし。追跡すべき公開天井カウンタは `NOT_APPLICABLE`。
- ホール経営ゲーム上、前日ハマリG数の据え置き狙いにつながる公開仕様は確認されない。

ceilingAfterReset:
- 天井機能なし。旧攻略保存資料で明記。
- 設定変更後の短縮天井も `NOT_APPLICABLE`。

modeAfterReset:
- 通常時モード管理、朝一専用モード、設定変更時モード振り分けは `NONE_CONFIRMED / NOT_APPLICABLE`。

stateAfterReset:
- 高確/CZ/ART等の公開通常状態管理は `NONE_CONFIRMED`。
- ボーナス成立後の告知待ち中など特殊状態に対する設定変更/電断処理は `UNVERIFIED`。

advantageousSectionReset:
- `NOT_APPLICABLE`（5号機・有利区間制度導入前）。

resetBenefits:
- 朝一短縮天井、朝一高確、専用CZ、リセット時初当たり優遇などは `NONE_CONFIRMED`。

resetPenalties:
- 設定変更時固有の主要不利要素は `NONE_CONFIRMED`。

resetDetection:
- 本機固有のガックン、ランプ、表示、出目等で設定変更/据え置きを推測できる高信頼な公開手順は、検索語・資料系統を変えて十分再探索後も確定できず `UNVERIFIED`。

numericResetData:
- 短縮天井: NOT_APPLICABLE
- 設定変更時モード振り分け: NONE_CONFIRMED
- 朝一特定G以内当選率/期待度: NONE_CONFIRMED
- リセット恩恵発生率: NONE_CONFIRMED
- 公開朝一専用数値: NONE_CONFIRMED

## sources

取得日: 2026-08-31

1. グリーンべると — 衝撃告知レッドフラッシュが5号機で復活（2007-08-24）
   - https://web-greenbelt.jp/00004275/
   - 発表内覧会、納品2007-09-17予定、BB/RB/合成の設定1〜6レンジ、機械割95.7〜110.0%、BIG純増312枚、RB104枚、1000円約35G、重複・告知待ち中のリプレイ確率変化。
   - reliability: INDUSTRY
2. P-WORLD 業界ニュース転載 — 衝撃告知レッドフラッシュが5号機で復活
   - https://news.p-world.co.jp/articles/2351/greenbelt
   - グリーンべると記事の転載。具体導入日・主要性能の照合用。
   - reliability: INDUSTRY_MIRROR
3. P-WORLD — ビーキッズクラブR
   - https://www.p-world.co.jp/machine/database/4873
   - 2007年9月導入、5号機ノーマル、合成1/176〜1/127。
   - reliability: OLD_DB
4. A-SLOT — オリンピア ビーキッズクラブR
   - https://www.a-slot.com/SHOP/heiwa65.html
   - 設定別BIG/REG/合成/機械割、2007年9月導入、BIG約310枚/REG約104枚。
   - reliability: RETROSPECTIVE / MACHINE_DB
5. パチスロ救急車 — ビーキッズクラブR完全攻略情報
   - https://www.eightbeat.com/slot99/kishu/ha_gyou/hi/beekidsclub5/page_menu.html
   - 2007年9月、天井なし、RT等の付加機能なし、設定別BIG/REG/合成/機械割。
   - reliability: OLD_ANALYSIS
6. 5号機クロニクル — 平和＆オリンピア5号機全機種一覧
   - https://5goki.com/heiwa-olympia
   - 2007年9月、機械割95.7〜110.0%。BIG最大375枚表記は純増312枚とは定義を分離。
   - reliability: RETROSPECTIVE

## missingFields

性能コアの必須項目は取得済み。

resetBehavior未確認:
- 設定変更時/電源OFF→ON時の本機固有リール初期挙動
- ボーナス成立済み・告知待ち等の特殊状態に対する設定変更/据え置き/電断処理
- 本機固有のガックン等による変更判別

## conflicts

- 出玉増加用RTの有無について、5号機クロニクルは「Aタイプ（RT機能付き）」とする一方、旧攻略保存資料は「RTなどの付加機能なし」。当時業界一次記事にはボーナス成立後〜告知までのリプレイ確率上昇が明記される。
- 本DBでは、**出玉増加区間としてのRTはなし**、ボーナス成立後の内部リプレイ確率変化は別挙動として記録し、性能系統をノーマルとする。
- BIG「最大375枚」（後年DB）と「純増312枚」（当時業界記事）は定義差として分離し、平均・競合処理しない。

## QA status

- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL
- resetRetroactiveQA: 新規収集時同時実施（2026-08-31）
