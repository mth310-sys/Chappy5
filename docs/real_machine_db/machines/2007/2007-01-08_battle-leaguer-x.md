# バトルリーガーX

status: PARTIAL
qaResetBehavior: PARTIAL

machineName: バトルリーガーX
formalModelName: バトルリーガー X
manufacturer: SANKYO
releaseDate: 2007-01-08（業界記事の納品開始予定日）
generation: 5号機初期
systemType: ボーナス + RT（ジェットゾーン）

## 性能コア

payoutRateBySetting:
- 5号機クロニクル: 設定1 94.5% / 設定2 99.2% / 設定3 104.4% / 設定4 107.5%
- 注: 同資料の設定別ボーナス欄に設定5・6が存在する一方、SANKYO公式と当時業界記事は4段階設定と明記するため、設定構成はCONFLICT。公式/当時業界資料を優先し4段階設定として扱う。

initialHitBySetting:
- SANKYO公式（4段階）
  - 設定1: BB 1/546 / RB 1/546
  - 設定2: BB 1/520 / RB 1/520
  - 設定3: BB 1/455 / RB 1/455
  - 設定4: BB 1/442 / RB 1/442
- 注: 5号機クロニクルにはSUPER BIG/BIG/MIDDLEを分離した6設定表が掲載されており、公式スペック表との定義・設定構成が一致しないため平均・統合しない。

baseGamesPer50: UNVERIFIED

netIncrease:
- RT「ジェットゾーン」: 約0.8枚/G（SANKYO公式・当時業界記事）
- 5号機クロニクルは約0.7枚/G表記のため小差をCONFLICTとして保持。

basicPayout:
- 当時業界記事: BIG 約270枚 / REG 約70枚
- 5号機クロニクル: SUPER BIG 約450枚 / BIG 約250枚 / MIDDLE 約110枚
- ボーナス種別・獲得枚数定義に差が大きいためCONFLICTとして保持。

modeSpecificMinimumData:
- 通常時100GごとにRT高確率ゾーン「リーガーチャンス」の抽せん。
- リーガーチャンスからRT「ジェットゾーン」への突入率は当時業界記事で15%。
- BIG後は「スーパーリーガーチャンス」へ移行し、ジェットゾーン突入率30%。
- ジェットゾーンは基本的に次回ボーナスまで継続し、純増約0.8枚/G。

## resetBehavior

settingChangeBehavior:
- 設定変更時の100G周期カウント、リーガーチャンス抽せん周期、内部RT関連状態がリセット/引継ぎのどちらになるか、機種名・型式・設定変更・リセット・朝一・据え置き・リーガーチャンス等へ検索語を変えて再探索したが高信頼資料を確認できずUNVERIFIED。

carryOverBehavior:
- 据え置き時の100G周期カウントおよびRT関連内部状態の引継ぎ仕様はUNVERIFIED。

powerCycleBehavior:
- 電源OFF→ONのみの固有挙動はUNVERIFIED。

gameCounterReset:
- 通常時100Gごとの周期抽せんは存在するが、設定変更/電源OFF→ONで当該内部周期ゲーム数がどう扱われるかはUNVERIFIED。

ceilingAfterReset:
- 次回ボーナスまで続くRTはあるが、一般的なボーナス間天井としての公開情報は今回確認できず。リセット短縮天井もUNVERIFIED/該当情報なし。

modeAfterReset:
- リーガーチャンス/スーパーリーガーチャンス等の状態は存在するが、設定変更時の専用モード移行・振り分けは今回確認できずUNVERIFIED。

stateAfterReset:
- RT関連内部状態の設定変更時再抽選/引継ぎはUNVERIFIED。

advantageousSectionReset:
- 非該当（有利区間制度導入前の5号機初期）。

resetBenefits:
- 設定変更固有の朝一恩恵として確定できる公開情報は今回確認できずUNVERIFIED。

resetPenalties:
- 設定変更固有の主要不利要素は今回確認できずUNVERIFIED。

resetDetection:
- ガックン、表示、周期挙動などによる機種固有の設定変更判別は、検索語・資料系統変更後も今回高信頼確定できずUNVERIFIED。

numericResetData:
- 設定変更時のみ適用される公開数値: 今回確認できず。

## 出典

取得日: 2026-08-31

1. SANKYOオンライン博物館「バトルリーガー X」
   - https://www.sankyo-fever.jp/collection/522/
   - 信頼度: OFFICIAL
   - 2007年1月、SANKYO初の5号機、4段階設定、BB/RB確率、100GごとのRT高確率ゾーン抽せん、RT純増約0.8枚/Gを確認。

2. P-WORLD / グリーンべると「SANKYO初の5号機『バトルリーガーX』」
   - https://news.p-world.co.jp/articles/1923/greenbelt
   - 信頼度: INDUSTRY
   - 2006-11-10掲載、納品2007-01-08開始予定、4段階設定、BIG/RB確率、リーガーチャンス15%、BIG後スーパーリーガーチャンス30%、RT純増約0.8枚/G、BIG約270枚/REG約70枚を確認。

3. 5号機クロニクル「SANKYO（三共）＆ジェイビー 5号機全機種一覧」
   - https://5goki.com/sankyo
   - 信頼度: ANALYSIS_SINGLE
   - 2007年1月、機械割94.5〜107.5%、RT純増約0.7枚/G、別定義のSUPER BIG/BIG/MIDDLE確率・獲得枚数を確認。公式資料との設定構成/ボーナス分類CONFLICT検出用途。

## missingFields

- baseGamesPer50
- settingChangeBehavior
- carryOverBehavior
- powerCycleBehavior
- gameCounterReset（100G周期の変更時扱い）
- modeAfterReset / stateAfterReset
- resetDetection

## conflicts

- 設定構成: SANKYO公式・当時業界記事は4段階設定。5号機クロニクルのボーナス確率表は設定1〜6を掲載。公式を優先し、後者を統合しない。
- RT純増: 公式/当時業界記事 約0.8枚/G、5号機クロニクル 約0.7枚/G。
- 基本獲得枚数/ボーナス分類: 当時業界記事BIG約270枚・REG約70枚に対し、5号機クロニクルはSUPER BIG約450枚・BIG約250枚・MIDDLE約110枚。定義差が大きく平均化しない。
