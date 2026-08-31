# 嗚呼!我ら日本松柔道部

machineName: 嗚呼!我ら日本松柔道部
manufacturer: WIN NET TECHNOLOGY / ラスター系販売表記あり
releaseDate: 2007-01
generation: 5号機初期
systemType: ボーナス+完走型RT

## payoutRateBySetting

当時解析HAZUSEでは 95.4 / 98.3 / 101.1 / 103.5 / 106.3 / 107.1%。後年5号機クロニクルでは 93.5 / 96.6 / 99.6 / 102.3 / 105.5 / 106.5% と差があるためCONFLICTとして保持する。

信頼度: CONFLICT（当時解析値を優先参照）

## initialHitBySetting

ボーナス合成: 設定1 1/274.2、2 1/265.3、3 1/237.4、4 1/217.7、5 1/194.5、6 1/188.9。
赤帯/黒帯/茶帯/緑帯/黄帯/白帯の6種。各個別確率はHAZUSEおよび5号機クロニクルに保存されている。

信頼度: ANALYSIS_HIGH

## baseGamesPer50

50枚/1000円あたりゲーム数を、表記揺れ・メーカー名・型式名・ベース/コイン持ちで再探索したが比較可能な公開値を確定できず UNVERIFIED。

## netIncrease

- RT「一本勝負」: 約+0.9枚/G。
- 赤帯ボーナス後: 完走型RT777G。
- その他5ボーナス後: CZで特殊リプレイ成立時に完走型RT200G。
- RT中にボーナス成立しても規定ゲーム数まで完走する。

信頼度: ANALYSIS_HIGH + INDUSTRY

## basicPayout

- 赤帯: 459枚超払出終了、純増約312枚 + RT777G
- 黒帯: 459枚超払出終了、純増約312枚
- 茶帯/緑帯: 261枚超払出終了、純増約180枚
- 黄帯/白帯: 45枚超払出終了、純増約36枚

業界記事でも赤帯純増約316枚、RT777Gの構成を確認。丸め差として扱う。

## modeSpecificMinimumData

赤帯以外のボーナス後はCZへ入り、条件成立でRT200G。赤帯は直接RT777G。RT純増約0.9枚/Gのため、赤帯+RTで1000枚以上獲得見込みと当時資料に記載。

## resetBehavior

resetBehaviorQA: PARTIAL

- settingChangeBehavior: 本機固有の高信頼な設定変更挙動を確認できず UNVERIFIED
- carryOverBehavior: 据え置き時のRT/CZ状態・ゲーム数引継ぎを高信頼資料で確定できず UNVERIFIED
- powerCycleBehavior: 電源OFF→ONのみの固有挙動を確認できず UNVERIFIED
- gameCounterReset: 通常時天井ゲーム数管理を確認しておらず天井ゲーム数は非該当。RT/CZ中電源断処理はUNVERIFIED
- ceilingAfterReset: 天井機能を確認しておらず非該当
- modeAfterReset: 通常時モード/朝一専用モードを確認できず
- stateAfterReset: 本機固有の朝一状態再抽選情報を確認できず
- advantageousSectionReset: 非該当（5号機初期、有利区間制度導入前）
- resetBenefits: 公開された設定変更/朝一恩恵を確認できず
- resetPenalties: 公開された設定変更時不利要素を確認できず
- resetDetection: ガックン等の本機固有変更判別を確認できず
- numericResetData: なし / UNVERIFIED

### resetBehavior 再探索メモ

「嗚呼我ら日本松柔道部 / 日本松柔道部 / ニッポンマツジュウドウブ / WIN NET / ラスター」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / RT引継ぎ / 天井 / ガックン」を組み合わせ、当時解析・P-WORLD・業界記事・後年回顧まで横断したが、設定変更固有情報は確定できなかった。

## sources

取得日: 2026-08-31

1. グリーンべると — WIN社から完走RTタイプの5号機第2弾発表
   - https://web-greenbelt.jp/00004919/
   - 2006-11-24発表、6種BB、赤帯純増約316枚+RT777G、他ボーナス後CZ
   - reliability: INDUSTRY
2. HAZUSE — 嗚呼!我ら日本松柔道部
   - https://hazuse.com/i/data/nihonmatujyudoubu/top.htm
   - 型式、機械割、基本仕様
   - reliability: ANALYSIS_HIGH
3. HAZUSE — ボーナス出現率
   - https://hazuse.com/i/data/nihonmatujyudoubu/bonus.htm
   - 各ボーナス確率・合成
   - reliability: ANALYSIS_HIGH
4. HAZUSE — ボーナス詳細
   - https://hazuse.com/i/data/nihonmatujyudoubu/bonus_shousai.htm
   - 払出終了条件・純増目安
   - reliability: ANALYSIS_HIGH
5. HAZUSE — 一本勝負RT詳細
   - https://hazuse.com/i/data/nihonmatujyudoubu/rt.htm
   - RT777/200G、約+0.9枚/G、完走型
   - reliability: ANALYSIS_HIGH
6. P-WORLD — 嗚呼!我ら日本松柔道部
   - https://www.p-world.co.jp/machine/database/4501
   - 2007年1月導入、型式名、ボーナス払出構成
   - reliability: ANALYSIS_SINGLE
7. 5号機クロニクル — WIN NET TECHNOLOGY
   - https://5goki.com/winnet
   - 2007/1、個別ボーナス確率、機械割別値
   - reliability: ANALYSIS_SINGLE
8. なな徹回顧記事
   - https://nana-press.com/post/1559653
   - 459枚払出プレミアムボーナス+777G完走RT、一撃性能の後年検証
   - reliability: ANALYSIS_SINGLE

## missingFields

- baseGamesPer50
- resetBehaviorの本機固有設定変更/据え置き/電源断挙動
- resetDetection

coreStatus: PARTIAL
resetBehaviorQA: PARTIAL

## conflicts

- 機械割: HAZUSE 95.4〜107.1% vs 5号機クロニクル 93.5〜106.5%。平均せず双方保持。
- 導入表記はHAZUSE 2006年12月、P-WORLD/5号機クロニクル2007年1月。発表・先行稼働と一般導入時期の差の可能性があるため、本DB releaseDateは2007-01とする。